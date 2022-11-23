import ContactForm from '../../../UI/form';
import '../form.css';
import '../input.css';

const fields = [
  {
    label: 'Metodo',
    id: 'Metodo',
    placeholder: '',
    type: 'typeMethod'
  },
  {
    label: 'Norm',
    id: 'Norm',
    placeholder: '',
    type: 'typeNorm'
  },
  {
    label: 'W',
    id: 'W',
    placeholder: '',
    type: 'text',
    options: {
        required: false,
        float: false
      }
  },
  {
    label: 'Tol',
    id: 'Tol',
    placeholder: '',
    type: 'text',
    options: {
      required: true,
      float: true
    }
  },
  {
    label: 'Niter',
    id: 'Niter',
    placeholder: '',
    type: 'text',
    options: {
      required: true,
      float: true
    }
  },
];

const IterativoForm = (props) => {
  const handleCallback = (childData) => {
    props.data(childData);
  }
  return (
    <ContactForm fields={fields} submitText='Evaluar' parentCallback={handleCallback} />
  )
}

export default IterativoForm
