import { sqrt, subtract, det, usolve, add, multiply, divide } from "mathjs";

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

  const choleskyFunction = (matrixA, B) => {
    let results = {
      iterations: [],
      conclusion: undefined,
      finalSolution: []
    };
  
    if (det(matrixA) === 0) {
      throw Error("La determinante de la matriz no puede ser cero");
    }
    let n = matrixA.length;
    let L = copyFunction(eye(n));
    let U = copyFunction(eye(n));
  
    for (let i = 0; i < n - 1; i++) {
      let productS1 = 0;
      for (let k = 0; k < i; k++) {
        productS1 = add(productS1, multiply(L[i][k], U[k][i]));
      }
      L[i][i] = sqrt(add(matrixA[i][i], -productS1));
      U[i][i] = L[i][i];
      for (let j = i + 1; j < n; j++) {
        let productS = 0;
        for (let k = 0; k < i; k++) {
          productS = add(productS, multiply(L[j][k], U[k][i]));
        }
        L[j][i] = divide(add(matrixA[j][i], -productS), U[i][i]);
      }
      for (let j = i + 1; j < n; j++) {
        let productS = 0;
        for (let k = 0; k < i; k++) {
          productS += add(productS, multiply(L[i][k], U[k][j]));
        }
        U[i][j] = divide(add(matrixA[i][j], -productS), L[i][i]);
      }
      results.iterations.push({
        L: copyFunction(L),
        U: copyFunction(U)
      });
    }
    let productS = 0;
    for (let k = 0; k < n - 1; k++) {
      productS = add(productS, multiply(L[n - 1][k], U[k][n - 1]));
    }
    L[n - 1][n - 1] = sqrt(matrixA[n - 1][n - 1] - productS);
    U[n - 1][n - 1] = L[n - 1][n - 1];
    results.iterations.push({
      L: copyFunction(L),
      U: copyFunction(U)
    });
    results.conclusion =
      "Tras aplicar la sustituci??n regresiva y progresiva obtenemos :";
    let resultZ = progressiveSustitution(L, B);
    let resultX = usolve(U, resultZ);
  
    results.finalSolution = resultX;
    return results;
  };
  
  export default choleskyFunction;
