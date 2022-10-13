import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home/Home'
import NotFound from './Pages/notFound/NotFound'
import NumericalMethods from './Pages/numericalMethods/NumericalMethods'
import Options from './Pages/options/Options'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home />
        <NotFound />
        <NumericalMethods />
        <Options />
      </BrowserRouter>
    </div>
  )
}

export default App
