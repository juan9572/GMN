import ContactForm from '../../../UI/form';
import '../form.css';
import '../input.css';

const fields = [
  {
    label: 'X0',
    id: 'X0',
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
    label: 'Tipo de error',
    id: 'Tipo',
    placeholder: '',
    type: 'typeError',
  },
  {
    label: 'Función',
    id: 'Function',
    placeholder: '',
    type: 'text',
    options: {
      required: true
    }
  },
  {
    label: 'Función g',
    id: 'FunctionG',
    placeholder: '',
    type: 'text',
    options: {
      required: true
    }
  },
];

const PfForm = (props) => {
  const handleCallback = (childData) => {
    props.data(childData);
  }
  return (
    <ContactForm fields={fields} submitText='Evaluar' parentCallback={handleCallback} />
  )
}

export default PfForm