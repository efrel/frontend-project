import ShopCard from './../components/ShopCard';
import '../styles/shops.css';
import {useState, useEffect} from 'react';

const ShopsView = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/data/shops.json');
        const data = await response.json();
        setShops(data);
      } catch (error) {
        console.error('Error al cargar los categorias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='shops-container'>
      <h2 className='shops-container__title'>Lista de tiendas</h2>
      <div className='shops-container__list'>
        {shops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default ShopsView;
