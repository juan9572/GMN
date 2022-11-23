import {Link} from 'react-router-dom'
import Logo from '../Img/Logo/Logo.png'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
            <Link to='/'>
              <img src={Logo} alt="Footer logo" />
            </Link>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/'>Home</Link>
          <Link to='/Metodos'>Métodos</Link>
          <Link to='/Ayuda'>Ayuda</Link>
        </article>
        <article>
          <h4>SENL</h4>
          <Link to='/Metodos/SENL/Biseccion'>Bisección</Link>
          <Link to='/Metodos/SENL/Regla-Falsa'>Regla Falsa</Link>
          <Link to='/Metodos/'>Más...</Link>
        </article>
        <article>
          <h4>SSDE</h4>
          <Link to='/Metodos/SSDE/Doolittle'>Doolittle</Link>
          <Link to='/Metodos/SSDE/Cholesky'>Cholesky</Link>
          <Link to='/Metodos/'>Más...</Link>
        </article>
        <article>
          <h4>Iterativos</h4>
          <Link to='/Metodos/Interpolacion/Vandermonde'>Vandermonde</Link>
          <Link to='/Metodos/Interpolacion/Spline'>Spline</Link>
          <Link to='/Metodos/'>Más...</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 GMN &copy; CC</small>
      </div>
    </footer>
  )
}

export default Footer
