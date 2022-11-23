import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {listaMetodos} from './../data'

const SectionMetodos = ({icon, title, className, id}) => {
  const next = listaMetodos.filter((metodo) => metodo.id === (id+1));
  const past = listaMetodos.filter((metodo) => metodo.id === (id-1));
  return (
    <div className="specific">
      <div className={`section__head ${className}`}>
      <div className="left">
        <span>
          {icon}
        </span>
        <h1>
          {title}
        </h1>
      </div>
        <div className="right">
          <div className="buttons">
            {id >= 1 && id < 22 &&
              <Link to={next[0].path} className='btn md'>
                <h3>{next[0].title}</h3>
                <MdNavigateNext className='iMetodo' />
              </Link>
            }
            {id <= 22 && id > 1 &&
              <Link to={past[0].path} className='btn md'>
                <h3>{past[0].title}</h3>
                <MdNavigateBefore className='iMetodo' /> 
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
  }
  
  export default SectionMetodos
