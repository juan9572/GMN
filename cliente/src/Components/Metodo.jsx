import SectionMetodoSpecific from './SectionMetodoSpecific'
import TableForm from './TableForm'
import TableForm1 from './TableForm1'
import TableForm2 from './TableForm2'
import TableForm3 from './TableForm3'
import TableForm4 from './TableForm4'
import TableForm5 from './TableForm5'
import TableForm6 from './TableForm6'
import TableForm7 from './TableForm7'
import TableForm8 from './TableForm8'
import TableForm9 from './TableForm9'
import TableForm10 from './TableForm10'
import TableForm11 from './TableForm11'
import TableForm12 from './TableForm12'
import TableForm13 from './TableForm13'
import TableForm14 from './TableForm14'
import TableForm15 from './TableForm15'
import TableForm16 from './TableForm16'
import TableForm17 from './TableForm17'
import TableForm18 from './TableForm18'
import TableForm19 from './TableForm19'
import TableForm20 from './TableForm20'
import TableForm21 from './TableForm21'
import './metodo.css'

const Metodo = ({title, icon, id}) => {
  return (
    <section className='metodo__especifico'>
      <div className='container especifico__container'>
        <SectionMetodoSpecific icon={icon} title={title} id={id}
        className='specific' />
        {
          id === 1?
          <TableForm />:
          id === 2?
          <TableForm1 />:
          id === 3?
          <TableForm2 />:
          id === 4?
          <TableForm3 />:
          id === 5?
          <TableForm4 />:
          id === 6?
          <TableForm5 />:
          id === 7?
          <TableForm6 />:
          id === 8?
          <TableForm7 />:
          id === 9?
          <TableForm8 />:
          id === 10?
          <TableForm9 />:
          id === 11?
          <TableForm10 />:
          id === 12?
          <TableForm11 />:
          id === 13?
          <TableForm12 />:
          id === 14?
          <TableForm13 />:
          id === 15?
          <TableForm14 />:
          id === 16?
          <TableForm15 />:
          id === 17?
          <TableForm16 />:
          id === 18?
          <TableForm17 />:
          id === 19?
          <TableForm18 />:
          id === 20?
          <TableForm19 />:
          id === 21?
          <TableForm20 />:
          id === 22?
          <TableForm21 />:
          ""
        }
      </div>
    </section>
  )
}

export default Metodo
