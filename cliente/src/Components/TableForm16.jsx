import './tableForm.css'
import { useState, useEffect } from "react";
import functionPlot from "function-plot";
import Latex from "react-latex";
import vandermondeFunction from "./Methods/Iterativos/vandermondeFunction";
import renderLatexTable from "./renderLatexTable";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import renderLatexMatrix from "./renderLatexMatrix";
import renderLatexPolynom from "./renderLatexPolynom";
import polynomFromArray from "./polynomFromArray";
import styled from "styled-components";
import SetOfPointsInput from "./SetOfPointsInput";

const TableForm = () => {
  const [points, setPoints] = useState({
    x: [1, 2],
    y: [1, 2],
  });
  const [methodState, setMethodState] = useState({
    points: "input",
  });
  const [latexTable, setLatexTable] = useState(
    "\\begin{array}{ |c|c|c|c|c|c|}  \n" +
      " \\hline\n" +
      "x & 1 & 2\\\\ \n" +
      " \\hline\n" +
      "y & 1 & 2\\\\ \n" +
      " \\hline\n" +
      "\\end{array}",
  );
  const [error, setError] = useState(null);
  const [results, setResults] = useState(undefined);
  const plotState = () =>{
    functionPlot({
      title: 'y =' + polynomFromArray(results.polynom),
      target: "#plot",
      width: window.screen.width < 800? window.screen.width < 450? 300 : 450 : 800,
      height: window.screen.height < 500? 350: 500,
      yAxis: { domain: [-10, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      data: [
        {
          fn: polynomFromArray(results.polynom),
          color:'blue',
          sampler: 'builtIn',
          graphType: 'polyline'
        }
      ]
    });
    return true;
  };
  useEffect(() => {
    setError(null);
    setLatexTable(renderLatexTable(points));
    if (methodState.points !== "input") {
      try {
        setResults(vandermondeFunction(points));
      } catch (e) {
        setError(e + "");
        setResults(undefined);
      }
    } else {
      setResults(undefined);
    }
  }, [points, methodState]);

  return (
    <>
      <div>
      {methodState.points === "input" ? (
        <CenteredColumn style={{color:'#000'}}>
          <SetOfPointsInput
            points={points}
            setPoints={points => setPoints(points)}
            setMethodState={state => setMethodState(state)}
          />
        </CenteredColumn>
      ) : (
        <CenteredColumn style={{color:'#000'}}>
          <Latex displayMode={true}>{`$$` + latexTable + `$$`}</Latex>
          <button className="btn"
            onClick={() => {
              setMethodState(prevState => ({
                ...prevState,
                points: "input",
              }));
            }}
          >
            Cambiar puntos
          </button>
        </CenteredColumn>
      )}
      </div>
      {results && plotState() && !error ? (
        <div>
          {!error ? (
            <div style={{color:'#000'}}>
              <p>Vandermonde matriz</p>
              <BlockMath
                math={
                  renderLatexMatrix(results.matrixA) +
                  renderLatexMatrix(results.ai) +
                  " = " +
                  renderLatexMatrix(results.B)
                }
              />
              <p>Coeficientes del polinomio :</p>
              <p>[{results.polynom.join(", ")}]</p>
              <p>Polinomio de Vandermonde</p>
              <BlockMath math={renderLatexPolynom(results.polynom)} />
            </div>
          ) : (
            <div>
              <p>{error}</p>
            </div>
          )}
          <p>{results.conclusion && results.conclusion}</p>
        </div>
      ) : (
        error && (
          <div>
            <p>{error}</p>
          </div>
        )
      )}
      <section className="plot" id="plot" style={{color:'#000'}}>
      </section>
    </>
  )
}

const CenteredColumn = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TableForm
