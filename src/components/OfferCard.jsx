/* eslint-disable react/prop-types */
import '../styles/offer-card.css';

const OfferCard = ({offer}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(offer.code);
  };

  return (
    <div className='offer-card'>
      <div className='offer-card__discount'>{offer.discount}</div>
      <div className='offer-card__code'>{offer.code}</div>
      <button onClick={handleCopyClick} className='offer-card__copy--btn'>
        Copiar
      </button>
    </div>
  );
};

export default OfferCard;
