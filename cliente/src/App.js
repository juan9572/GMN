import { useState, useEffect } from 'react'
import axios from "axios";
import NavBar from "./components/Navbar/Navbar";
import Section from "./components/Cards/CardSection";

function App() {

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get("http://localhost:5000/hello_world").then(
          (response) => {
            const res = response;
            setData(res.data);
          })
      } catch (err) {
        console.log(err.response.data);
      }
    }
    fetchData();
  }, [])

  const [data, setData] = useState([{}]);

  return (
    <div className="App">
      <NavBar />
      <Section />
      {typeof data.Datos === 'undefined' ? (<p>No hay datos ....</p>) :
        (data.Datos.map(
          (estado, i) => (<p key={i}>{estado}</p>)
        ))}
    </div>
  );
}

export default App;