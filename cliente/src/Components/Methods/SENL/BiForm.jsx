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
    label: 'Delta',
    id: 'Delta',
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
    label: 'Función',
    id: 'Function',
    placeholder: '',
    type: 'text',
    options: {
      required: true
    }
  },
];

const BiForm = (props) => {
  const handleCallback = (childData) => {
    props.data(childData);
  }
  return (
    <ContactForm fields={fields} submitText='Evaluar' parentCallback={handleCallback} />
  )
}

export default BiForm
