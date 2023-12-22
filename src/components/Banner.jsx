import Search from './Search';
import '../styles/banner.css';

export const Banner = () => {
  return (
    <div className='banner'>
      <img src='./src/assets/banner.png' alt='banner' loading='lazy' decoding='async' className='banner__imagen' />
      <div className='banner__body'>
        <h1 className='body__title'>Entrega en menos de 90 min</h1>
        <p className='body__subtitle'>Aprovecha y busca tus productos favoritos</p>
        <Search />
      </div>
    </div>
  );
};
