import React from "react";
import './matrix.css'

const MatrixInput = ({
  matrixSize,
  setMatrix,
  setMethodState,
  matrix,
  type = "A",
}) => {
  if (
    !matrix ||
    Array.isArray(!matrix) ||
    Array.isArray(!matrix[0]) ||
    matrix.length !== matrixSize.rows ||
    matrix[0].length !== matrixSize.columns
  ) {
    matrix = Array(matrixSize.rows);
    for (let i = 0; i < matrixSize.rows; i++) {
      matrix[i] = new Array(matrixSize.columns).fill(0);
      for (let j = 0; j < matrixSize.columns; j++) {
        matrix[i][j] = 1;
      }
    }
  }
  const handleSubmit = event => {
    event.preventDefault();
    let count = 0;
    for (let i = 0; i < matrixSize.rows; i++) {
      for (let j = 0; j < matrixSize.columns; j++) {
        matrix[i][j] = !isNaN(parseFloat(event.target[count].value))
          ? parseFloat(event.target[count].value)
          : 0;
        count += 1;
      }
    }
    setMatrix(matrix);
    if (type === "A") {
      setMethodState(prevState => ({
        ...prevState,
        matrixA: "matrix",
      }));
    } else if (type === "B") {
      setMethodState(prevState => ({
        ...prevState,
        B: "matrix",
      }));
    } else if (type === "initialValueX0") {
      setMethodState(prevState => ({
        ...prevState,
        initialValueX0: "matrix",
      }));
    }
  };
  return (
    <div>
      <form className="f" onSubmit={handleSubmit}>
        {matrix.map((row, indexRow = 1) => {
          return (
            <div style={{
                'display': 'flex'
            }} key={indexRow}>
              {row.map((item, indexColumn = 1) => {
                return (
                  <input
                    className="form-row"
                    key={indexRow + " " + indexColumn}
                    type="text"
                    defaultValue={matrix[indexRow][indexColumn]}
                    name={indexRow + "," + indexColumn}
                  />
                );
              })}
            </div>
          );
        })}
        <button className="btn">
          {type === "A"
            ? "Guardar A"
            : type === "B"
            ? "Guardar B"
            : type === "initialValueX0"
            ? "Guardar x0"
            : "Guardar"}
        </button>
      </form>
    </div>
  );
};


export default MatrixInput;