import {Link} from 'react-router-dom';
import Button from './Button';
import '../styles/nav.css';
import Logo from '../assets/logo.png';

export const NavBar = () => {
  return (
    <header className='nav'>
      <div className='nav__hidden'></div>
      <div>
        <div className='nav__container'>
          <div className='container__logo'>
            <Link className='container__logo--a' to='/'>
              <span className='logo__spam'>
                <img src={Logo} alt='Logo' className='logo__spam--img' />
              </span>
            </Link>
          </div>
          <div className='container__options'>
            <ul className='options__list'>
              <li>
                <Link to='/shops'>Tiendas</Link>
              </li>
              <li>
                <Link to='/offers'>Ofertas</Link>
              </li>
              <li>
                <Link to='/contact'>Contactanos</Link>
              </li>
            </ul>
            <div className='options__buttons'>
              <Button variant='primary'>Unirse</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
