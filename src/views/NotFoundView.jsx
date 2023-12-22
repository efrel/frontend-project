import {useNavigate} from 'react-router-dom';
import '../styles/not-found.css';
import Button from './../components/Button';

const NotFoundView = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='notFound'>
      <img src='./src/assets/404.png' alt='Pagina no encontrada' className='notFound__image' />

      <div className='notFound__info'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__text'>No encontramos la página que busca.</p>
        <Button onClick={goHome} variant='primary'>
          Ir a inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFoundView;
