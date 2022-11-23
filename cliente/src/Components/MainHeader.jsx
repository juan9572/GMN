import {Link} from 'react-router-dom'
import './mainHeader.css'
import Image from '../Img/Header/4117341.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Sistema de ecuaciones y ecuaciones no lineales</h4>
          <h1>Métodos numéricos</h1>
          <p>
            Página para resolver problemas de ecuaciones y ecuaciones
            no lineales mediante varios métodos numéricos.
          </p>
          <Link to='/Metodos' className='btn'>Lista de métodos</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">

          </div>
          <div className="main__header-image">
            <img src={Image} alt='Header' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
