import gaussPartialFunction from '../SSDE/gaussPivoteParcial';

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

const splinesLinearFunction = points => {
    let results = {
      polynom: undefined,
      interpolationPolynomials: [],
      tracerCoefficient: [],
    };
    if(hasDuplicates(points.x)){
      throw Error("X has duplicates, a value of X can only be declared once: x points = " +  points.x)
    }
    if (hasDuplicates(points.y)) {
      throw Error("Y has duplicates, a value of Y can only be declared once: y points = " + points.y);
    }
    
    let n = points.x.length;
    let m = 2 * (n - 1);
    let A = zeros(m);
    
    let S = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
      S[i] = new Array(2);
      S[i][0] = 0;
      S[i][1] = 0;
    }
  
    let b = new Array(m);
    for (let i = 0; i < m; i++) {
      b[i] = new Array(1);
      b[i][0] = 0;
    }
  
    if (n !== points.y.length) {
      return;
    }
  
    // interpolation conditions
  
    for (let i = 0; i < n - 1; i++) {
      A[i + 1][2 * i] = parseFloat(points.x[i + 1]);
      A[i + 1][2 * i + 1] = 1;
      b[i + 1][0] = parseFloat(points.y[i + 1]);
    }
    A[0][0] = parseFloat(points.x[0]);
    A[0][1] = 1;
    b[0][0] = parseFloat(points.y[0]);
  
    // continuity conditions
    for (let i = 1; i < n - 1; i++) {
      A[n - 1 + i][2 * i - 2] = parseFloat(points.x[i]);
      A[n - 1 + i][2 * i - 1] = 1;
      A[n - 1 + i][2 * i] = parseFloat(-points.x[i]);
      A[n - 1 + i][2 * i + 1] = -1;
      b[n - 1 + i][0] = 0;
    }
  
    let solX = gaussPartialFunction(A, b).finalSolution;
  
    for (let i = 0; i < solX.length/2; i++) {
      results.interpolationPolynomials.push(solX[i*2] + "x + " + solX[i*2+1]);
      results.tracerCoefficient.push([solX[i*2], solX[i*2 + 1]]);
    }
    results.polynom = results.interpolationPolynomials
      .map((pol, index) => {
        return "(" + points.y[index] + "*" + pol + ")";
      })
      .join(" + ");
    return results;
  };
  
  export default splinesLinearFunction;