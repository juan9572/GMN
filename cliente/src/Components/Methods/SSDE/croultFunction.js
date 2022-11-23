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

  const croultFunction = (matrixA, B) => {
    let results = {
      iterations: [],
      conclusion: undefined,
      finalSolution: []
    };
    if (det(matrixA) === 0) {
      throw Error("La determinante de la matrix no puede ser cero");
    }
    let n = matrixA.length;
    let L = copyFunction(eye(n));
    let U = copyFunction(eye(n));
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = i; j < n; j++) {
        let productS = 0;
        for (let k = 0; k < i; k++) {
          productS += L[j][k] * U[k][i];
        }
        L[j][i] = matrixA[j][i] - productS;
      }
      for (let j = i + 1; j < n; j++) {
        let productS = 0;
        for (let k = 0; k < i; k++) {
          productS += L[i][k] * U[k][j];
        }
        U[i][j] = (matrixA[i][j] + -productS) / L[i][i];
      }
      results.iterations.push({
        L: copyFunction(L),
        U: copyFunction(U)
      });
    }
    let productS = 0;
    for (let k = 0; k < n - 1; k++) {
      productS += L[n - 1][k] * U[k][n - 1];
    }
    L[n - 1][n - 1] = matrixA[n - 1][n - 1] - productS;
    results.iterations.push({
      L: copyFunction(L),
      U: copyFunction(U)
    });
    results.conclusion =
      "Tras aplicar la sustitución regresiva y progresiva obtenemos :";
    let resultZ = progressiveSustitution(L, B);
    results.finalSolution = usolve(U, resultZ);
    return results;
  };
  
  export default croultFunction;
