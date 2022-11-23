import gaussPartialFunction from '../SSDE/gaussPivoteParcial';
import { pow } from 'mathjs';

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
  
  const hasDuplicates = array => {
    const set = Array.from(new Set(array));
    return !(JSON.stringify(set) === JSON.stringify(array));
};

const splinesCuadFunction = points => {
    let results = {
      polynom: undefined,
      interpolationPolynomials: [],
      tracerCoefficient: [],
    };
    if(hasDuplicates(points.x)){
      throw Error("X tiene duplicados, un valor de x solo puede ser declarado una vez: puntos de x repetidos = " +  points.x)
    }
    if (hasDuplicates(points.y)) {
      throw Error("Y tiene duplicados, un valor de y solo puede ser declarado una vez: puntos de y repetidos = " + points.y);
    }
  
    let n = points.x.length;
    let m = 3 * (n - 1);
    let A = zeros(m);
  
    if(n!== points.y.length){
      throw Error("x y y tienen diferentes dimensiones")
    }
    let S = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
      S[i] = new Array(3);
      S[i][0] = 0;
      S[i][1] = 0;
      S[i][2] = 0;
    }
  
    let b = new Array(m);
    for (let i = 0; i < m; i++) {
      b[i] = new Array(1);
      b[i][0] = 0;
    }
  
    if (n !== points.y.length) {
      return;
    }
  
  
    for (let i = 0; i < n - 1; i++) {
      A[i + 1][3 * (i + 1) - 3] = pow(parseFloat(points.x[i + 1]), 2);
      A[i + 1][3 * (i + 1) - 2] = parseFloat(points.x[i + 1]);
      A[i + 1][3 * (i + 1) - 1] = 1;
  
      b[i + 1][0] = parseFloat(points.y[i + 1]);
    }
  
    A[0][0] = pow(parseFloat(points.x[0]), 2);
    A[0][1] = parseFloat(points.x[0]);
    A[0][2] = 1;
  
    b[0][0] = parseFloat(points.y[0]);
  

    for (let i = 1; i < n - 1; i++) {
      A[n - 1 + i][3 * i - 3] = pow(parseFloat(points.x[i]), 2);
      A[n - 1 + i][3 * i - 2] = parseFloat(points.x[i]);
      A[n - 1 + i][3 * i - 1] = 1;
      A[n - 1 + i][3 * i] = -pow(parseFloat(points.x[i]), 2);
      A[n - 1 + i][3 * i + 1] = -parseFloat(points.x[i]);
      A[n - 1 + i][3 * i + 2] = -1;
  
      b[n - 1 + i][0] = 0;
    }
  
  
    for (let i = 1; i < n - 1; i++) {
      A[2 * n - 3 + i][3 * i - 3] = 2 * parseFloat(points.x[i]);
      A[2 * n - 3 + i][3 * i - 2] = 1;
      A[2 * n - 3 + i][3 * i - 1] = 0;
      A[2 * n - 3 + i][3 * i] = -2 * parseFloat(points.x[i]);
      A[2 * n - 3 + i][3 * i + 1] = -1;
      A[2 * n - 3 + i][3 * i + 2] = 0;
  
      b[2 * n - 3 + i][0] = 0;
    }
  

  
    A[m - 1][0] = 2;
    b[m - 1][0] = 0;
  
    let solX = gaussPartialFunction(A, b).finalSolution;
  
    for (let i = 0; i < solX.length/3; i++) {
      results.interpolationPolynomials.push(
        solX[i*3] + "x^2 + (" + solX[i*3 +1] + ")x + (" + solX[i*3 + 2] + ")",
      );
      results.tracerCoefficient.push([solX[i*3], solX[i*3 + 1], solX[i*3 + 2]]);
    }
  
    return results;
  };
  
  export default splinesCuadFunction;
