import gaussSimpleFunction from "../SSDE/gaussSimple";
import { format } from "mathjs";

const hasDuplicates = array => {
    const set = Array.from(new Set(array));
    return !(JSON.stringify(set) === JSON.stringify(array));
};

const vandermondeFunction = points => {
  let results = {
    matrixA: [[]],
    B: [[]],
    ai: [[]],
    polynom: undefined,
    coeffs: []
  };
  if(hasDuplicates(points.x)){
    throw Error("X tiene duplicados, un valor de x solo puede ser declarado una vez: puntos de x repetidos = " +  points.x)
  }
  if (hasDuplicates(points.y)) {
    throw Error("Y tiene duplicados, un valor de y solo puede ser declarado una vez: puntos de y repetidos = " + points.y);
  }
  let degree = points.x.length;
  let matrixA = Array(degree);
  let B = Array(degree);
  let ai = Array(degree);
  for (let i = 0; i < degree; i++) {
    matrixA[i] = new Array(degree).fill(0);
    B[i] = [points.y[i]]; 
    ai[i] = ["a_" + (i + 1)]; 
    for (let j = 0; j < degree; j++) {
      matrixA[i][j] = points.x[i] ** (degree - j - 1); 
    }
  }
  results.matrixA = matrixA;
  results.B = B;
  results.ai = ai;
 
  results.polynom = gaussSimpleFunction(matrixA, B).finalSolution.map(coeff =>
    format(coeff[0], { notation: "fixed", precision: 6 })
  );
  return results;
};

export default vandermondeFunction;
