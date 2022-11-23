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
import splinesLinearFunction from "./Methods/Iterativos/splineLineal";

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
    let data = [];
    for(let i = 0; i < results.interpolationPolynomials.length; i++){
      data.push(
        {
          fn: results.interpolationPolynomials[i],
          sampler: 'builtIn',
          graphType: 'polyline'
        }
      );
    }
    const a = functionPlot.globals.COLORS;
    console.log(a);
    functionPlot({
      title: 'Graficas',
      target: "#plot",
      width: window.screen.width < 800? window.screen.width < 450? 300 : 450 : 800,
      height: window.screen.height < 500? 350: 500,
      yAxis: { domain: [-10, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      data: data
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
        setResults(splinesLinearFunction(points));
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
          <CenteredColumn>
            <SetOfPointsInput
              points={points}
              setPoints={points => setPoints(points)}
              setMethodState={state => setMethodState(state)}
            />
          </CenteredColumn>
        ) : (
          <CenteredColumn>
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
              <div>
                <h2>Spline Linear</h2>
                {results.tracerCoefficient.length !== 0 && (
                  <Table id="table" style={{overflowX:"scroll"}}>
                  <Thead>
                    <Tr>
                      <Th>
                        <InlineMath>i</InlineMath>
                      </Th>
                      <Th>
                        <InlineMath>Coeficiente 1</InlineMath>
                      </Th>
                      <Th>
                        <InlineMath>Coeficiente 2</InlineMath>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {results.tracerCoefficient.map((Lx, index) => {
                        return (
                            <Tr key={index}>
                              <Td>{index}</Td>
                              {Lx.map((coef, index) => {
                                return <Td key={index}>{coef}</Td>
                              })}
                            </Tr>
                        );
                      })}
                  </Tbody>
                </Table>
                )}
                {results.interpolationPolynomials.length !== 0 && setPlotState() && (
                  <Table id="table" style={{overflowX:"scroll"}}>
                  <Thead>
                    <Tr>
                      <Th>
                        <InlineMath>i</InlineMath>
                      </Th>
                      <Th>
                        <InlineMath>Tracers</InlineMath>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {results.interpolationPolynomials.map((Lx, index) => {
                        return (
                            <Tr key={index}>
                              <Td>{index}</Td>
                              <Td><InlineMath>{Lx}</InlineMath></Td>
                            </Tr>
                        );
                      })}
                  </Tbody>
                </Table>
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
      {results ? results.interpolationPolynomials.length !== 0 &&
        results.interpolationPolynomials.map((Lx, index) => {
                          return (
                              <Tr key={index}>
                                <Td style={{
                                  background: `hsl(
                                    ${functionPlot.globals.COLORS[index].h},
                                    ${functionPlot.globals.COLORS[index].s * 100}%,
                                    ${functionPlot.globals.COLORS[index].l * 100}%
                                  ) `,
                                  color: '#fff'
                                  }}><InlineMath>{Lx}</InlineMath></Td>
                              </Tr>
                          );
        }):""}
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
