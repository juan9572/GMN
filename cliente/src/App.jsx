import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home/Home'
import NotFound from './Pages/notFound/NotFound'
import NumericalMethods from './Pages/numericalMethods/NumericalMethods'
import SpecificMethod from './Pages/numericalMethods/SpecificMethod'
import Options from './Pages/options/Options'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {listaMetodos} from './data'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Metodos' element={<NumericalMethods />} />
          <Route path='/Ayuda' element={<Options />} />
          <Route path='*' element={<NotFound />} />
          {
            listaMetodos.map(({id, icon, title, path}) => {
              return (
                <Route key={id} path={path} 
                  element={
                    <SpecificMethod title={title} icon={icon}
                      id={id}
                    />
                  }
                />
              )
            })
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
