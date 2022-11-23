import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './tableForm.css'
import { useEffect, useState } from "react";
import functionPlot from "function-plot";
import SetOfPointsInput from "./SetOfPointsInput";
import styled from "styled-components";
import Latex from "react-latex";
import { InlineMath } from "react-katex";
import renderLatexTable from "./renderLatexTable";
import "katex/dist/katex.min.css";
import lagrangeFunction from "./Methods/Iterativos/lagrangeFunction";

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
  const setPlotState = () => {
    functionPlot({
      title: 'y =' + results.polynom,
      target: "#plot",
      width: window.screen.width < 800? window.screen.width < 450? 300 : 450 : 800,
      height: window.screen.height < 500? 350: 500,
      yAxis: { domain: [-10, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      data: [
        {
          fn: results.polynom,
          color:'blue',
          sampler: 'builtIn',
          graphType: 'polyline'
        }
      ]
    });
    return true;
  }
  const [error, setError] = useState(null);
  const [results, setResults] = useState(undefined);
  useEffect(() => {
    setError(null);
    setLatexTable(renderLatexTable(points));
    if (methodState.points !== "input") {
      try {
        setResults(lagrangeFunction(points));
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
        {results ? (
          <div>
            {!error ? (
              <div style={{color:'#000'}}>
                <p>Polinomios de interpolacion de Lagrange</p>
                {results.interpolationPolynomials.length !== 0 && (
                  <Table id="table" style={{overflowX:"scroll"}}>
                  <Thead>
                    <Tr>
                      <Th>
                        <InlineMath>i</InlineMath>
                      </Th>
                      <Th>
                        <InlineMath>L_i(x)</InlineMath>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {results.interpolationPolynomials.map((Lx, index) => {
                        return (
                            <Tr key={index}>
                              <Td>{index}</Td>
                              <Td>{Lx}</Td>
                            </Tr>
                        );
                      })}
                  </Tbody>
                </Table>
                )}
                <p>Polinomio de Lagrange</p>
                {results.polynom && setPlotState() && (
                  <div>
                    <p>{results.polynom}</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p>{error}</p>
              </div>
            )}
          </div>
        ) : (
          methodState.points !== "input" && (
            <div>
              <p>{error}</p>
            </div>
          )
        )}
      </div>
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
