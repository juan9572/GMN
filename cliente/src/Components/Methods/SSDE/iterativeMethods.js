import {
    det,
    diag,
    add,
    unaryMinus,
    inv,
    multiply,
    subtract,
    abs,
    max,
    norm,
    pow
  } from "mathjs";
  import { eig } from "numericjs";

  const normP = (A, val) => {
    let result = 0;
    for (let i = 0; i < A.length; i++) {
      result = add(result, pow(abs(A[i][0]), val));
    }
    result = pow(result, 1 / val);
    return result;
  };

  const triu = m => {
    if (m.length !== m[0].length) throw new Error("La matriz no es cuadrada");
    let returnMatrix = Array(m.length);
    for (let i = 0; i < m.length; i++) {
      returnMatrix[i] = new Array(m[0].length).fill(0);
      for (let j = 0; j < m[0].length; j++) {
        if (i <= j) returnMatrix[i][j] = m[i][j];
        else returnMatrix[i][j] = 0;
      }
    }
    return returnMatrix;
  };

  const tril = m => {
    if (m.length !== m[0].length) throw new Error("La matriz no es cuadrada");
    let returnMatrix = Array(m.length);
    for (let i = 0; i < m.length; i++) {
      returnMatrix[i] = new Array(m[0].length).fill(0);
      for (let j = 0; j < m[0].length; j++) {
        if (i >= j) returnMatrix[i][j] = m[i][j];
        else returnMatrix[i][j] = 0;
      }
    }
    return returnMatrix;
  };

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
  
  const iterativeMethodsFunctions = (
    matrixA,
    B,
    initialValueX0,
    tol,
    NMax,
    normValue,
    l = 1,
    w = 1
  ) => {
    let results = {
      D: [[]],
      L: [[]],
      U: [[]],
      C: [[]],
      T: [[]],
      spectralRadiance: undefined,
      iterations: [],
      conclusion: undefined,
      error: null,
      finalSolution: []
    };
    let T = [[]];
    let C = [[]];
    let D = [[]];
    let L = [[]];
    let U = [[]];
    let error = tol + 1;
    let count = 0;
    let xAnt;
    let x;
    
    if (zeroInDiagonal(matrixA)) {
      throw Error("Algunos elementos de la diagonal son 0. El m??todo no se puede ejecutar.");
    } 
    if (NMax < 0 ) {
      throw Error("La cantidad maxima de iteraciones es < 0: iteraciones = " + NMax);
    } 
    if(tol < 0 ) {
      throw Error("La tolerancia no puede ser menor que cero: tol + " + tol);
    } 

    if (det(matrixA) === 0) {
      throw Error("det(A) es 0. El m??todo no se puede ejecutar.");
    }
    D = diag(diag(matrixA));
    L = add(unaryMinus(tril(matrixA)), D); 
    U = add(unaryMinus(triu(matrixA)), D); 
    if (l === 1) {
      // Jacobi
      T = multiply(inv(D), add(L, U));
      C = multiply(inv(D), B);
    } else if (l === 2) {
      // Gauss-Seidel
      T = multiply(inv(subtract(D, L)), U);
      C = multiply(inv(subtract(D, L)), B);
    } else {
      // SOR
      T = multiply(
        inv(subtract(D, multiply(w, L))),
        add(multiply(1 - w, D), multiply(w, U))
      );
      C = multiply(multiply(w, inv(subtract(D, multiply(w, L)))), B);
    }
    results.D = D;
    results.L = L;
    results.U = U;
    results.C = C;
    results.T = T;
    results.spectralRadiance = max(abs(eig(T).lambda.x));
    if (results.spectralRadiance > 1) {
      results.error =
        "Error : El radio espectral es superior a 1, El m??todo no se puede ejecutar.";
      return results;
    }
    xAnt = copyFunction(initialValueX0);
    results.iterations.push({"Niter": count, "E":"", "x":xAnt});
    while (error > tol && count < NMax) {
      x = add(multiply(T, xAnt), C);
  
      if (normValue === 1 || normValue === "inf") {
        error = norm(subtract(xAnt, x), normValue);
      }
      else {
        error = normP(subtract(xAnt, x), normValue);
      }
  
      xAnt = x;
      count += 1;
      results.iterations.push({"Niter": count, "E":error, "x":x});
    }
    return results;
  };
  
  export default iterativeMethodsFunctions;
