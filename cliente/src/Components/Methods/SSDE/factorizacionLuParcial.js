import { abs, subtract, det, usolve, add, multiply, divide } from "mathjs";

const zeroInDiagonal = M => {
    for (let i = 0; i < M.length; i++) {
      for (let j = 0; j < M[0].length; j++) {
        if (i === j && M[i][j] === 0) {
          return true;
        }
      }
    }
    return false;
  };
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
  const luPartialFunction = (matrixA, B) => {
    let results = {
      iterations: [],
      conclusion: undefined,
      finalSolution: []
    };
    let n = matrixA[0].length;
    let L = eye(n);
    let U = zeros(n);
    let P = eye(n);
    let M = copyFunction(matrixA);
    if (zeroInDiagonal(matrixA)) {
      throw Error("Algunos elementos de la diagonal son 0. El método no se puede ejecutar");
    }
    if (det(matrixA) === 0) {
      throw Error("La determinante de la matriz no puede ser cero");
    }
    for (let i = 0; i < n - 1; i++) {
      let indexMax = new Array(2);
      let tempM = 0;
      for (let j = i + 1; j < n; j++) {
        if(abs(M[j][i]) > abs(tempM)){
          tempM = abs(M[j][i]);
          indexMax[0]=j;
          indexMax[1]=i;
        }
      }
      if(tempM > abs(M[i][i])){
        for(let j = i; j < n; j++){
          let aux1 = M[indexMax[0]][j];
          M[indexMax[0]][j] = M[i][j];
          M[i][j] = aux1;
          let aux2 = P[indexMax[0]][j];
          P[indexMax[0]][j] = P[i][j];
          P[i][j] = aux2;
        }
        if(i>1){
          for(let j = 0; j < i-1; j++){
            let aux1 = L[indexMax[0]][j];
            L[indexMax[0]][j] = L[i][j];
            L[i][j] = aux1;
          }
        }
      }
      for (let j = i + 1; j < n; j++) {
        if (M[j][i] !== 0) {
          L[j][i] = M[j][i] / M[i][i];
          let auxOp = Array(n + 1);
          for (let k = i; k < n; k++) {
            auxOp[k] = M[j][k] - (M[j][i] / M[i][i]) * M[i][k];
          }
          for (let k = i; k < n; k++) {
            M[j][k] = auxOp[k];
          }
        }
      }
      for (let j = i; j < n; j++) {
        U[i][j] = M[i][j];
      }
      for (let j = i + 1; j < n; j++) {
        U[i + 1][j] = M[i + 1][j];
      }
      results.iterations.push({
        M: copyFunction(M),
        L: copyFunction(L),
        U: copyFunction(U),
        P: copyFunction(P)
      });
    }
    let resultZ = progressiveSustitution(L, B);
    let resultX = usolve(U, resultZ);
    results.conclusion = "Tras aplicar la sustitución regresiva y progresiva obtenemos:";
    results.finalSolution = resultX;
    return results;
  };
  
  export default luPartialFunction;