import OfferCard from './../components/OfferCard';
import '../styles/offer.css';
import {useState, useEffect} from 'react';

const OffersView = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/offers.json');
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error al cargar los categorias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='offers'>
      <h2 className='offers__title'>Ofertas Especiales</h2>
      <div className='offers__list'>
        {offers.map(offer => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersView;
