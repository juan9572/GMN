import SectionMetodos from './SectionMetodos'
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'
import './FAQs.css'

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionMetodos icon={<FaQuestion />} title='Ayuda' />
        <div className="faqs__wrapper">
          {
            faqs.map(({id, question, answer}) => {
              return <FAQ key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs
