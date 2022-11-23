import { abs, det, usolve, add, multiply, divide } from "mathjs";

const findMaxElement = (M, a, b) => {
    let results = new Array(2);
    let max = abs(M[a][a]);
    results[0]= a;
    results[1]= a;
  
    for (let i = a; i < M.length; i++) {
      for (let j = b; j < M.length; j++) {
        if (abs(M[i][j]) > abs(max)) {
          max = M[i][j];
          results[0] = i;
          results[1] = j;
        }
      }
    }
    return results;
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
  
  const getCol = (matrix, col) => {
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push([matrix[i][col]]);
    }
    return column;
  };

  const gaussTotalFunction = (matrixA, B) => {
    let results = {
      iterations: [],
      conclusion: undefined,
      finalSolution: [],
    };
    
    let m = matrixA.length;
    let n = matrixA[0].length;
    if (m !== n) {
      throw Error("The matrix is not square");
    }
    if (m !== B.length) {
      throw Error("B has different dimension");
    }
    if (det(matrixA) === 0) {
      throw Error("Determinant of the matrix cannot be zero");
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
  
    let marca = new Array(n);
    for (let i = 0; i < n; i++) {
      marca[i] = i + 1;
    }
  
    results.iterations.push(copyFunction(M));
  
    //inicia solucion 
  
    for (let i = 0; i < n - 1; i++) {
  
      let indexMax = new Array(2);
  
      
      indexMax = findMaxElement(M, i, i);
      let colMayor = indexMax[1];
  
      
      // cambio de columna
  
      if(i !== colMayor){
      for (let j = 0; j < n; j++) {
        let temp = M[j][indexMax[1]];
        M[j][indexMax[1]] = M[j][i];
        M[j][i] = temp;
      }
  
      
      let temp = marca[colMayor];
      marca[colMayor] = marca[i];
      marca[i] = temp;
    }
  
      //Cambio de fila
      if( i !== indexMax[0]){
  
      for (let j = i; j < n + 1; j++) {
        let temp = M[indexMax[0]][j];
        M[indexMax[0]][j] = M[i][j];
        M[i][j] = temp;
      }
    }
      for (let j = i + 1; j < n; j++) {
        if (M[j][i] !== 0) {
          let auxOp = Array(n + 1);
          for (let k = i; k < n + 1; k++) {
            auxOp[k] = add(M[j][k], - multiply(divide(M[j][i], M[i][i]), M[i][k]));
          }
          for (let k = i; k < n + 1; k++) {
            M[j][k] = auxOp[k];
          }
        }
      }
    
      
      results.iterations.push(copyFunction(M));
    }
  
    results.conclusion = "After applying regressive substitution we get :";
    let resultX = usolve(
      M.map(function(val) {
        // A = all columns of M except the last one
        return val.slice(0, -1);
      }),
      getCol(M, m), // B = last column of M
    );
    
    let tempAr = copyFunction(resultX);
    for (let i = 0; i < n; i++) {
      resultX[marca[i]-1] = tempAr[i];
    }
    results.finalSolution = resultX;
  
    return results;
  };
  
  export default gaussTotalFunction;