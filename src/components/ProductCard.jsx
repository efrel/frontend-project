/* eslint-disable react/prop-types */
import Button from './Button';
import '../styles/product-card.css';

const ProductCard = ({product, onAdd, onRemove, cartQuantity}) => {
  return (
    <article className='product-card'>
      <div className='product-card__image'>
        <img src={product.imageUrl} alt={product.name} className='product-card__image--src' />
        {product.discount ? <span className='product-card__price--old'>{product.discount}%</span> : null}
      </div>

      <div className='product-card__info'>
        <h3 className='product-card__name'>{product.name}</h3>
        <p className='product-card__price'>
          <span className='product-card__price--current'>${product.price}</span>
        </p>

        <div className='product-card__add'>
          <Button className='product-card__add--btn' variant='primary' onClick={() => onRemove(product)}>
            -
          </Button>
          <div className='product-card__add--span'>{cartQuantity > 0 ? `${cartQuantity}` : 'Agregar'}</div>
          <Button className='product-card__add--btn' variant='primary' onClick={() => onAdd(product)}>
            +
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
