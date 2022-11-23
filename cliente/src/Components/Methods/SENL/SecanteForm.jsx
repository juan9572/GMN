import ContactForm from '../../../UI/form';
import '../form.css';
import '../input.css';

const fields = [
  {
    label: 'x0',
    id: 'x0',
    placeholder: '',
    type: 'text',
    options: {
      required: true,
      float: true
    }
  },
  {
    label: 'x1',
    id: 'x1',
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
];

const SecanteForm = (props) => {
  const handleCallback = (childData) => {
    props.data(childData);
  }
  return (
    <ContactForm fields={fields} submitText='Evaluar' parentCallback={handleCallback} />
  )
}

export default SecanteForm