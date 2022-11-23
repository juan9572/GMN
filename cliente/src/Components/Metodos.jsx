import SectionMetodos from './SectionMetodos'
import {TbMathFunction} from 'react-icons/tb'
import {AiFillCaretRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {listaMetodos} from '../data'
import Card from '../UI/Card'
import './metodos.css'

const Metodos = () => {
  return (
    <section className='metodos'>
      <div className='container metodos__container'>
        <SectionMetodos icon={<TbMathFunction />} title='Métodos'/>
        <h2 className='title__wrapper'>
            Sistema de ecuaciones no lineales
        </h2>
        <div className="metodos__wrapper SENL">
            {
              listaMetodos.filter(metodo => metodo.category === 'SENL').map(
                ({id, icon, title, info, path}) => {
                  return (
                      <Card className='metodos__metodo' key={id}>
                        <span>
                            {icon}
                        </span>
                        <h3>
                            {title}
                        </h3>
                        <small>
                            {info}
                        </small>
                        <Link to={path} className="btn sm">
                            Ver más
                            <AiFillCaretRight />
                        </Link>
                      </Card>
                    )
                })
            }
        </div>
        <h2 className='title__wrapper'>
            Solución de sistema de ecuaciones
        </h2>
        <div className="metodos__wrapper SENL">
            {
              listaMetodos.filter(metodo => metodo.category === 'SSDE').map(
                ({id, icon, title, info, path}) => {
                  return (
                      <Card className='metodos__metodo' key={id}>
                        <span>
                            {icon}
                        </span>
                        <h3>
                            {title}
                        </h3>
                        <small>
                            {info}
                        </small>
                        <Link to={path} className="btn sm">
                            Ver más
                            <AiFillCaretRight />
                        </Link>
                      </Card>
                    )
                })
            }
        </div>
        <h2 className='title__wrapper'>
            Interpolación
        </h2>
        <div className="metodos__wrapper SENL">
            {
              listaMetodos.filter(metodo => metodo.category === 'Interpolation').map(
                ({id, icon, title, info, path}) => {
                  return (
                      <Card className='metodos__metodo' key={id}>
                        <span>
                          {icon}
                        </span>
                        <h3>
                          {title}
                        </h3>
                        <small>
                          {info}
                        </small>
                        <Link to={path} className="btn sm">
                          Ver más
                          <AiFillCaretRight />
                        </Link>
                      </Card>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Metodos
