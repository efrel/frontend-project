import {useState} from 'react';
import ProductCard from './ProductCard';
import useFetch from './../hooks/useFetch';
import '../styles/product-grid.css';

const ProductGrid = () => {
  const [cartItems, setCartItems] = useState([]);

  const {data: products, isLoading, error} = useFetch('/data/products.json');

  if (isLoading) return <p className='product__loader'>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  const handleAddToCart = product => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? {...itemExists, quantity: itemExists.quantity + 1} : item,
        );
      } else {
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  };

  const handleRemoveToCart = product => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? {...itemExists, quantity: itemExists.quantity - 1} : item,
        );
      } else {
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  };

  // Obtener la cantidad de un producto específico en el carrito
  const getCartQuantity = productId => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className='product-grid'>
      <div className='product-grid__items'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAddToCart}
            onRemove={handleRemoveToCart}
            cartQuantity={getCartQuantity(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
