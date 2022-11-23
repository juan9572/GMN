import './tableForm.css'
import { useState, useEffect } from "react";
import MatrixInput from "./MathInput";
import MatrixInputSize from "./MathSizeInput";
import renderLatexMatrix from "./renderLatexMatrix";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import choleskyFunction from './Methods/SSDE/cholesky'

const TableForm = () => {
  const [matrixASize, setMatrixASize] = useState({
    rows: 2,
    columns: 2,
  });
  const [matrixA, setMatrixA] = useState([[0,0],[0,0]]);
  const [B, setB] = useState([[1],[1]]);

  const [latexMatrixA, setLatexMatrixA] = useState(
    "\\begin{pmatrix}\n 0 & 0 \\\\\n a & b \n \\end{pmatrix}",
  );

  const [latexB, setLatexB] = useState(
    "\\begin{pmatrix}\n a\\\\\n b\n \\end{pmatrix}",
  );

  const [error, setError] = useState(null);
  const [results, setResults] = useState(undefined);
  const [methodState, setMethodState] = useState({
    matrixA: "inputSize",
    B: "input",
    solving: undefined,
  });
  useEffect(() => {
    setError(null);
    setLatexMatrixA(renderLatexMatrix(matrixA));
    setLatexB(renderLatexMatrix(B));
    if (methodState.matrixA === "matrix" && methodState.B === "matrix") {
      try {
        setResults(choleskyFunction(matrixA, B));
      } catch (e) {
        setResults({
          iterations: [],
          conclusion: undefined,
          finalSolution: [],
        });
        setError(e + "");
      }
    } else {
      setResults(undefined);
    }
  }, [matrixA, B, methodState]);  
  return (
    <>
        <div className="mat" style={{color:'#000'}}>
        {methodState.matrixA === "inputSize" ? (
          <MatrixInputSize
            matrixSize={matrixASize}
            setMatrixSize={object => setMatrixASize(object)}
            setMethodState={object => setMethodState(object)}
            methodState={methodState}
          />
        ) : methodState.matrixA === "inputMatrix" ? (
          <div>
            <MatrixInput
              type={"A"}
              matrix={matrixA}
              matrixSize={matrixASize}
              setMatrix={matrix => setMatrixA(matrix)}
              setMethodState={value => setMethodState(value)}
            />
            <button
              className="btn"
              onClick={() => {
                setMethodState(prevState => ({
                  ...prevState,
                  matrixA: "inputSize",
                }));
              }}
            >
              Cambiar tamaño
            </button>
          </div>
        ) : (
          methodState.matrixA === "matrix" && (
            <div>
              <BlockMath math={"A = " + latexMatrixA} />
              <button
                className="btn"
                onClick={() => {
                  setMethodState(prevState => ({
                    ...prevState,
                    matrixA: "inputMatrix",
                  }));
                }}
              >
                Cambiar A
              </button>
            </div>
          )
        )}
        {methodState.B === "input" ? (
          <MatrixInput
            type={"B"}
            matrix={B}
            matrixSize={{ ...matrixASize, columns: 1 }}
            setMatrix={matrix => setB(matrix)}
            setMethodState={value => setMethodState(value)}
          />
        ) : (
          methodState.B === "matrix" && (
            <div>
              <BlockMath math={"B = " + latexB} />
              <button
                className="btn"
                onClick={() => {
                  setMethodState(prevState => ({
                    ...prevState,
                    B: "input",
                  }));
                }}
              >
                Cambiar B
              </button>
            </div>
          )
        )}
        </div>
        <div style={{color:'#000'}}>
        {results && !error ? (
        <div>
          {results.iterations.map((iter, index) => {
            return (
              <div key={index}>
                <p>Step {index + 1}</p>
                <BlockMath math={"L = " + renderLatexMatrix(iter.L, 6)} />
                <BlockMath math={"U = " + renderLatexMatrix(iter.U, 6)} />
              </div>
            );
          })}
          <p>{results.conclusion}</p>
          <BlockMath
            math={"x = " + renderLatexMatrix(results.finalSolution, 6)}
          />
        </div>
      ) : (error && (
        <div>
          <p>{error}</p>
        </div>
        )
      )}
        </div>
    </>
  )
}

export default TableForm
