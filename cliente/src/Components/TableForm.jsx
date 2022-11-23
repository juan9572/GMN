import BiTable from "./Methods/SENL/BiTable"
import BiForm from "./Methods/SENL/BiForm"
import './tableForm.css'
import { useState } from "react";
import functionPlot from "function-plot";
import incrementalSearch from "./Methods/SENL/bi";

const TableForm = () => {
  const [dataTable,setDataTable] = useState(null);
  const [conclusion,setConclusion] = useState(null);
  const getDataForm = async (childData) => {
    const res = incrementalSearch(
      childData.Function.value,
      parseFloat(childData.X0.value),
      parseFloat(childData.Delta.value),
      parseInt(childData.Niter.value)
    );
    setConclusion(res.conclusion);
    setDataTable(res.table);
    functionPlot({
      title: 'y =' + childData.Function.value,
      target: "#plot",
      width: window.screen.width < 800? window.screen.width < 450? 300 : 450 : 800,
      height: window.screen.height < 500? 350: 500,
      yAxis: { domain: [-10, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      data: [
        {
          fn: childData.Function.value,
          color:'blue',
          sampler: 'builtIn',
          graphType: 'polyline'
        }
      ]
    });
  };
  return (
    <>
      <section>
        <div className="form">
          <BiForm data={getDataForm} />
        </div>
        <div className="table">
          <BiTable data={dataTable} />
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
    </>
  )
}

export default TableForm
