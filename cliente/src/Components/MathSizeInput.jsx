import React from "react";
import './matrix.css'
  
  const MatrixInputSize = ({
    setMatrixSize,
    matrixSize,
    setMethodState,
    type = "square",
  }) => {
    return (
      <div>
        <div className="matrix">
          <label>
            {type === "square" ? "Size" : "Number of rows (A)"}
            <input
              type="number"
              min="2"
              max="12"
              defaultValue={matrixSize.rows}
              onChange={e => {
                const rows = parseInt(e.target.value);
                if (2 <= rows && rows <= 12) {
                  type !== "square"
                    ? setMatrixSize(prevSize => ({
                        ...prevSize,
                        rows: rows,
                      }))
                    : setMatrixSize(prevSize => ({
                        ...prevSize,
                        columns: rows,
                        rows: rows,
                      }));
                }
              }}
            />
          </label>
          {type !== "square" && (
            <label>
              Columnas de (A)
              <input
                type="number"
                min="2"
                max="12"
                defaultValue={matrixSize.columns}
                onChange={e => {
                  const columns = parseInt(e.target.value);
                  if (2 <= columns && columns <= 12) {
                    setMatrixSize(prevSize => ({
                      ...prevSize,
                      columns: columns,
                    }));
                  }
                }}
              />
            </label>
          )}
          <button
            className="btn"
            onClick={() => {
              setMethodState(prevState => ({
                ...prevState,
                matrixA: "inputMatrix",
              }));
            }}
          >
            Validar tamaño de A (<strong>{matrixSize.rows}</strong> rows and{" "}
            <strong>{matrixSize.columns}</strong> columns)
          </button>
        </div>
      </div>
    );
  };
  
  export default MatrixInputSize;