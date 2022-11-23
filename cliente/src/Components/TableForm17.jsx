import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Methods/table.css'
import './tableForm.css'
import functionPlot from "function-plot";
import { useState, useEffect } from "react";
import Latex from "react-latex";
import newtonInterpolationFunction from "./Methods/Iterativos/newtonInterpolation";
import renderLatexTable from "./renderLatexTable";
import "katex/dist/katex.min.css";
import styled from "styled-components";
import SetOfPointsInput from "./SetOfPointsInput";
import { InlineMath } from "react-katex";
import {format} from 'mathjs';

const TableForm = () => {
  const [points, setPoints] = useState({
    x: [1, 2],
    y: [1, 2],
  });
  const [methodState, setMethodState] = useState({
    points: "input",
  });
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
  useEffect(() => {
    setError(null);
    setLatexTable(renderLatexTable(points));
    if (methodState.points !== "input") {
      try {
        setResults(newtonInterpolationFunction(points));
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
            Cambiar los puntos
          </button>
        </CenteredColumn>
      )}
      {results ? (
        <div>
          {!error ? (
            <div style={{color:'#000'}}>
              <p>Tabla de diferencias divididas de Newton</p>
              {
                results.dividedDifference && (
                  <Table id="table" style={{overflowX:"scroll"}}>
                    <Thead>
                      <Tr>
                        <Th>
                          <InlineMath>n</InlineMath>
                        </Th>
                        <Th>
                          <InlineMath>x_i</InlineMath>
                        </Th>
                        {results.dividedDifference.map((row, index) => {
                          if (index === 0) {
                            return (
                              <Th key={index}>
                                <InlineMath>y = f(x_i)</InlineMath>
                              </Th>
                            );
                          } else {
                            return (
                              <Th key={index}>
                                <InlineMath>{index + ""}</InlineMath>
                              </Th>
                            );
                          }
                        })}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {results.dividedDifference.map((row, indexY) => {
                          return (
                              <Tr key={indexY}>
                                <Td>{indexY}</Td>
                                <Td>{points.x[indexY]}</Td>
                                {row.map((elem, indexX) => {
                                  return indexY === 0 ? (
                                    <Td key={indexX}>
                                      <strong>
                                        {format(elem, {
                                          notation: "fixed",
                                          precision: 4,
                                        })}
                                      </strong>
                                    </Td>
                                  ) : (
                                    <Td key={indexX}>
                                      {format(elem, {
                                        notation: "fixed",
                                        precision: 6,
                                      })}
                                    </Td>
                                  );
                                })}
                              </Tr>
                          );
                        })}
                    </Tbody>
                  </Table>
                )
              }
              <p>Coeficientes polinomiales de Newton:</p>
              <p>[{results.dividedDifference[0].join(", ")}]</p>
              <p>Polinomio de Newton</p>
              {results.polynom && setPlotState() && (
                <div>
                  <p>{results.polynom.replace(/\\cdot/g, "")}</p>
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
