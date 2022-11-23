import { subtract, det, usolve, add, multiply, divide } from "mathjs";

const copyFunction = inObject => {
    let outObject, value, key;
    if (typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) {
      value = inObject[key];
      outObject[key] = copyFunction(value);
    }
    return outObject;
  };
  
  const zeros = (a) => {
    let result = new Array(a);
    for (let i = 0; i < a; i++) {
      result[i] = new Array(a);
      for (let j = 0; j < a; j++) {
        result[i][j] = 0;
      }
    }
    return result;
  };

  const progressiveSustitution = (A, B) => {
    let n = A[0].length;
  
    let xResult = new Array(n);
  
    xResult[0] = divide(B[0], A[0][0]);
  
    for (let i = 1; i < n; i++) {
      let suma = 0;
      for (let j = 0; j < i; j++) {
        suma = add(suma, multiply(A[i][j], xResult[j]));
      }
      xResult[i] = divide(subtract(B[i], suma), A[i][i]);
    }
    return xResult;
  };

  const eye = a => {
    let result = new Array(a);
    for (let i = 0; i < a; i++) {
      result[i] = new Array(a);
      result[i].fill(0);
      result[i][i] = 1;
    }
    return result;
  };

const luSimpleFunction = (matrixA, B) => {
    let results = {
      iterations: [],
      conclusion: undefined,
      finalSolution: []
    };
    let n = matrixA[0].length;
  
    let L = eye(n);
    let U = zeros(n);
  
    let M = copyFunction(matrixA);
  
    let xZeros = new Array(n);
  
    if (det(matrixA) === 0) {
      throw Error("Determinant of the matrix cannot be zero");
    }
    
    for (let i = 0; i < n; i++) {
      xZeros[i] = new Array(1);
      xZeros[i][0] = 0;
    }
  
    for (let i = 0; i < n - 1; i++) {
      if (M[i][i] === 0) {
        throw Error("There is a 0 in the diagonal.");
      }
      // Multipliers
      for (let j = i + 1; j < n; j++) {
        if (M[j][i] !== 0) {
  
          L[j][i] = divide(M[j][i], M[i][i]);
  
          let auxOp = Array(n + 1);
          for (let k = i; k < n; k++) {
            auxOp[k] = add(M[j][k] ,- multiply(divide(M[j][i], M[i][i]), M[i][k]));
          }
  
          for (let k = i; k < n; k++) {
            M[j][k] = auxOp[k];
          }
        }
      }
      //U
      for (let j = i; j < n; j++) {
        U[i][j] = M[i][j];
      }
      for (let j = i + 1; j < n; j++) {
        U[i + 1][j] = M[i + 1][j];
      }
      results.iterations.push({
        M: copyFunction(M),
        L: copyFunction(L),
        U: copyFunction(U)
      });
    }
  
    U[n - 1][n - 1] = M[n - 1][n - 1];
  
    let resultZ = progressiveSustitution(L, B);
    let resultX = usolve(U, resultZ);
    results.conclusion = "After applying regressive substitution we get :";
    results.finalSolution = resultX;
    return results;
  };
  
  export default luSimpleFunction;