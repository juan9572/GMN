import {useState, useEffect} from 'react'

function App() {

  useEffect(() => {
    fetch("/hello_world").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  const [data,setData]= useState([{}]);

  return (
    <div className="App">
      {typeof data.Datos === 'undefined' ? (<p>No hay datos ....</p>) : 
      (data.Datos.map(
        (estado,i) => (<p key={i}>{estado}</p>)
      ))}
    </div>
  );
}

export default App;
