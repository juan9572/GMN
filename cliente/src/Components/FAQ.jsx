import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({question, answer}) => {
  const [isAnswerShowing, SetIsAnswerShowing] = useState(false);
  return (
    <article className="faq" 
      onClick={() => SetIsAnswerShowing(prev => !prev)}
    >
      <div>
        <h3>
          {question}
        </h3>
        <button className="faq__icon">
          {
            isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {
        isAnswerShowing && <p> {answer} </p>
      }
    </article>
  )
}

export default FAQ
