import IterativoTable from "./Methods/SSDE/IterativoTable"
import IterativoForm from "./Methods/SSDE/IterativoForm"
import './tableForm.css'
import { useState, useEffect } from "react";
import MatrixInput from "./MathInput";
import MatrixInputSize from "./MathSizeInput";
import renderLatexMatrix from "./renderLatexMatrix";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import iterativeMethodsFunctions from './Methods/SSDE/iterativeMethods'

const TableForm = () => {
  const [matrixASize, setMatrixASize] = useState({
    rows: 2,
    columns: 2,
  });
  const [matrixA, setMatrixA] = useState([
    [1, 1],
    [1, 1]
  ]);
  const [B, setB] = useState([[1], [1]]);
  const [latexMatrixA, setLatexMatrixA] = useState(
    "\\begin{pmatrix}\n 0 & 0 \\\\\n a & b\n \\end{pmatrix}",
  );
  const [latexB, setLatexB] = useState(
    "\\begin{pmatrix}\n a\\\\\n b\n \\end{pmatrix}",
  );
  const [latexInitialValueX0, setLatexInitialValueX0] = useState(
    "\\begin{pmatrix}\n a\\\\\n b\n \\end{pmatrix}",
  );
  const [initialValueX0, setInitialValueX0] = useState([[0], [0]]);
  const [method, setMethod] = useState();
  const [tol, setTol] = useState();
  const [normValue, setnormValue] = useState();
  const [NMax, setNMax] = useState();
  const [wValue, setWValue] = useState();
  const [error, setError] = useState(null);
  const [paramSet, setParamSet] = useState();
  const [results, setResults] = useState(undefined);
  const [methodState, setMethodState] = useState({
    matrixA: "inputSize",
    B: "input",
    initialValueX0: "input",
  });
  useEffect(() => {
    setError(null);
    setLatexMatrixA(renderLatexMatrix(matrixA));
    setLatexB(renderLatexMatrix(B));
    setLatexInitialValueX0(renderLatexMatrix(initialValueX0));
    if (
      methodState.matrixA === "matrix" &&
      methodState.B === "matrix" &&
      methodState.initialValueX0 === "matrix" &&
      paramSet
    ) {
      try {
        console.log("AAA");
        setResults(
          iterativeMethodsFunctions(
            matrixA,
            B,
            initialValueX0,
            tol,
            NMax,
            normValue,
            method,
            wValue,
          ),
        );
      } catch (e) {
        setError(e + "");
        setResults(undefined);
      }
    } else {
      console.log(paramSet);
      setResults(undefined);
    }
  }, [
    matrixA,
    B,
    methodState,
    paramSet,
    NMax,
    initialValueX0,
    method,
    normValue,
    tol,
    wValue,
  ]);

  const getDataForm = (childData) => {
    console.log(childData);
    setMethod(parseInt(childData.Metodo.value));
    setTol(parseFloat(childData.Tol.value));
    setnormValue(childData.Norm.value);
    setNMax(parseInt(childData.Niter.value));
    setWValue(parseFloat(childData.W.value));
    setParamSet(true);
  };

  return (
    <>
      <section style={{color:'#000'}}>
        <div className="form">
          <IterativoForm data={getDataForm} />
        </div>
        <div>
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
            <button className="btn"
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
              <button className="btn"
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
        {methodState.initialValueX0 === "input" ? (
          <MatrixInput
            type={"initialValueX0"}
            matrix={initialValueX0}
            matrixSize={{ ...matrixASize, columns: 1 }}
            setMatrix={matrix => setInitialValueX0(matrix)}
            setMethodState={value => setMethodState(value)}
          />
        ) : (
          methodState.initialValueX0 === "matrix" && (
            <div>
              <BlockMath math={"x0 = " + latexInitialValueX0} />
              <button className="btn"
                onClick={() => {
                  setMethodState(prevState => ({
                    ...prevState,
                    initialValueX0: "input",
                  }));
                }}
              >
                Change x0
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
              <BlockMath math={"b = " + latexB} />
              <div className="btn"
                onClick={() => {
                  setMethodState(prevState => ({
                    ...prevState,
                    B: "input",
                  }));
                }}
              >
                Change B
              </div>
            </div>
          )
        )}
      </div>
      {results && !error ? (
        <div>
          <BlockMath math={"T = " + renderLatexMatrix(results.T, 6)} />
          <BlockMath math={"C = " + renderLatexMatrix(results.C, 6)} />
          <p>
            <strong>Spectral radius</strong> :{" "}
            {results.spectralRadiance &&
              results.spectralRadiance}
          </p>
          </div>
          ):<p></p>}
        <div className="table">
            <IterativoTable data={results?results.iterations:null} />
        </div>
      </section>
    </>
  )
}

export default TableForm
