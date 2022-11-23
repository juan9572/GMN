import { usolve, det } from "mathjs";

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
  
  const getCol = (matrix, col) => {
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push([matrix[i][col]]);
    }
    return column;
  };

const gaussSimpleFunction = (matrixA, B) => {
  let results = {
    iterations: [],
    conclusion: undefined,
    finalSolution: []
  };
  let m = matrixA.length;
  let n = matrixA[0].length;
  
  if (m !== n) {
    throw Error("La matriz no es cuadrada");
  }
  if (m !== B.length) {
    throw Error("B tiene dimensiones distintas");
  }
  if (det(matrixA) === 0) {
    throw Error("La determinante de la matriz no puede ser cero");
  }

  let M = new Array(n);
  for (let i = 0; i < n; i++) {
    M[i] = new Array(n + 1);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      M[i][j] = matrixA[i][j];
    }
    M[i][n] = B[i][0];
  }
  results.iterations.push(copyFunction(M));
  for (let i = 0; i < n - 1; i++) {
    if (M[i][i] === 0) {
      M = copyFunction(M);
      for (let j = i + 1; j < n; j++) {
        if (M[j][i] !== 0) {
          let aux = new Array(n + 1);
          for (let k = i; k < n + 1; k++) {
            aux[k] = M[j][k];
            M[j][k] = M[i][k];
            M[i][k] = aux[k];
          }
          break;
        }
      }
    }
    for (let j = i + 1; j < n; j++) {
      if (M[j][i] !== 0) {
        M = copyFunction(M);
        let auxOp = Array(n + 1);
        for (let k = i; k < n + 1; k++) {
          auxOp[k] = M[j][k] - (M[j][i] / M[i][i]) * M[i][k];
        }

        for (let k = i; k < n + 1; k++) {
          M[j][k] = auxOp[k];
        }
      }
    }
    results.iterations.push(copyFunction(M));
  }
  let resultX = usolve(
    M.map(function(val) {
      return val.slice(0, -1);
    }),
    getCol(M, n)
  );
  results.conclusion = "Tras aplicar la sustitución regresiva y progresiva obtenemos :";
  results.finalSolution = resultX;
  return results;
};

export default gaussSimpleFunction;