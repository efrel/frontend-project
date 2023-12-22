/* eslint-disable react/prop-types */
import '../styles/shop-card.css';

const ShopCard = ({shop}) => {
  return (
    <div className='shop-card'>
      <div className='shop-card__icon'>
        <img className='shop-card__icon--img' src={shop.iconUrl} alt={shop.name} />
      </div>
      <h3 className='shop-card__title'>{shop.name}</h3>
      <p className='shop-card__address'>{shop.address}</p>
    </div>
  );
};

export default ShopCard;
