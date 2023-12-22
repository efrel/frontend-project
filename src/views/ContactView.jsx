import {useState} from 'react';
import '../styles/contact.css';
import Button from './../components/Button';

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí manejarías el envío de datos del formulario, como una solicitud HTTP
    console.log(formData);

    alert('Formulario enviado');
  };

  return (
    <div className='contact'>
      <div className='contact__img'>
        <div className='contact__img--src'>
          <img
            src='https://cdn.pixabay.com/photo/2022/04/04/12/58/customer-support-7111206_1280.png'
            alt='atencion al cliente'
          />
        </div>
      </div>
      <div className='contact__form'>
        <h2 className='contact__form--title'>¿Cómo podemos mejorar su experiencia?</h2>
        <form onSubmit={handleSubmit}>
          <div className='form__primary'>
            <div className='primary__div'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Nombre'
                className='primary__input'
              />
            </div>
            <div className='primary__div'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='primary__input'
              />
            </div>
          </div>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Asunto'
            className='primary__subject'
          />
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Descripción'
            className='primary__textarea'></textarea>
          <Button variant='primary'>Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactView;
