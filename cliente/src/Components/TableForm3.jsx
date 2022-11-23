import PfForm from "./Methods/SENL/PfForm"
import PfTable from "./Methods/SENL/PfTable"
import './tableForm.css'
import { useState } from "react";
import functionPlot from "function-plot";
import pfSearch from "./Methods/SENL/pf";

const TableForm = () => {
  const [dataTable,setDataTable] = useState(null);
  const [conclusion,setConclusion] = useState(null);
  const [functions, setFunctions] = useState(null);
  const getDataForm = async (childData) => {
    const res = pfSearch(
      childData.Function.value,
      childData.FunctionG.value,
      parseFloat(childData.X0.value),
      parseFloat(childData.Tol.value),
      parseInt(childData.Niter.value),
      parseInt(childData.Tipo.value)
    );
    setConclusion(res.conclusion);
    setDataTable(res.table);
    let data = [
      {
        fn: childData.Function.value,
        sampler: 'builtIn',
        graphType: 'polyline'
      },
      {
        fn: childData.FunctionG.value,
        sampler: 'builtIn',
        graphType: 'polyline'
      }
    ];
    setFunctions([childData.Function.value,childData.FunctionG.value]);
    functionPlot({
      title: 'y =' + childData.Function.value,
      target: "#plot",
      width: window.screen.width < 800? window.screen.width < 450? 300 : 450 : 800,
      height: window.screen.height < 500? 350: 500,
      yAxis: { domain: [-10, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      data: data
    });
  };
  return (
    <>
      <section>
        <div className="form">
          <PfForm data={getDataForm} />
        </div>
        <div className="table">
          <PfTable data={dataTable} />
          {
            conclusion ?
            <h3>
              {conclusion}
            </h3>:          
            <p></p>
          }
        </div>
      </section>
      <section className="plot" id="plot" style={{color:'#000'}}>
      </section>
      {functions ? 
        (
          functions.map((fn ,index) => {
            console.log(index);
            return (
              <div key={index} style={{
                background: `hsl(
                  ${functionPlot.globals.COLORS[index].h},
                  ${functionPlot.globals.COLORS[index].s * 100}%,
                  ${functionPlot.globals.COLORS[index].l * 100}%
                ) `,
                color: '#fff'
                }}>
                {fn}
              </div>
            )
          })
        ) : ""
      }
    </>
  )
}

export default TableForm
