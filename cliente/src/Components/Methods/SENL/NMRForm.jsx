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
    label: 'Primera Derivada de la Función',
    id: 'firstDerivFunction',
    placeholder: '',
    type: 'text',
    options: {
      required: true
    }
  },
  {
    label: 'Segunda Derivada de la Función',
    id: 'scndDerivFunction',
    placeholder: '',
    type: 'text',
    options: {
      required: true
    }
  },
];

const NMRForm = (props) => {
  const handleCallback = (childData) => {
    props.data(childData);
  }
  return (
    <ContactForm fields={fields} submitText='Evaluar' parentCallback={handleCallback} />
  )
}

export default NMRForm