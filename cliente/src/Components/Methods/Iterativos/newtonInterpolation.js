const hasDuplicates = array => {
    const set = Array.from(new Set(array));
    return !(JSON.stringify(set) === JSON.stringify(array));
};

const newtonInterpolationFunction = points => {
    let results = {
      polynom: undefined,
      dividedDifference: undefined
    };
    if(hasDuplicates(points.x)){
      throw Error("X tiene duplicados, un valor de x solo puede ser declarado una vez: puntos de x repetidos = " +  points.x)
    }
    if (hasDuplicates(points.y)) {
      throw Error("Y tiene duplicados, un valor de x solo puede ser declarado una vez: puntos de y repetidos = " + points.y);
    }
    let expression = "";
    let degree = points.x.length;
    
    let pyramid = Array(degree);
    for (let i = 0; i < degree; i++) {
      pyramid[i] = new Array(degree).fill(0);
      for (let j = 0; j < degree; j++) {
        
        if (j === 0) pyramid[i][j] = parseFloat(points.y[i]);
      }
    }
    for (let j = 1; j < degree; j++) {
      
      for (let i = 0; i < degree - j; i++) {
        
        pyramid[i][j] =
          (pyramid[i + 1][j - 1] - pyramid[i][j - 1]) /
          (points.x[i + j] - points.x[i]);
      }
    }
    
    for (let i = 0; i < degree; i++) {
      if (i === 0) {
        if (pyramid[0][i] < 0) {
          expression += "-" + pyramid[0][i];
        } else {
          expression += pyramid[0][i];
        }
      } else {
        if (pyramid[0][i] >= 0) {
          expression += " + " + pyramid[0][i];
        } else {
          expression += " " + pyramid[0][i];
        }
        for (let j = 0; j < i; j++) {
          if (points.x[j] < 0) {
            expression += "(x+" + -points.x[j] + ")";
          } else if (points.x[j] === 0) {
            expression += "(x)";
          } else {
            expression += "(x-" + points.x[j] + ")";
          }
        }
      }
    }
    results.dividedDifference = pyramid;
    results.polynom = expression;
    return results;
  };
  
  export default newtonInterpolationFunction;
