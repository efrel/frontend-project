import {useState} from 'react';
import '../styles/carrousel.css';

const carrousels = [
  {
    id: 1,
    title: 'Express Delivery',
    imageUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75',
    description: 'With selected items',
  },
  {
    id: 2,
    title: 'Cash On Delivery',
    imageUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75',
    description: 'With selected items',
  },
  {
    id: 3,
    title: 'Gift Voucher',
    imageUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75',
    description: 'With personal care items',
  },
  {
    id: 4,
    title: 'Cupon',
    imageUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=640&q=75',
    description: 'With selected items',
  },
  {
    id: 5,
    title: 'Envio gratis',
    imageUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=640&q=75',
    description: 'With selected items',
  },
];

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carrousels.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + carrousels.length) % carrousels.length);
  };

  // Calcular el desplazamiento de la pista del carrusel
  const slideWidth = 100 / carrousels.length; // Porcentaje del ancho de un slide basado en la cantidad de slides

  return (
    <div className='carrousel'>
      <div className='carrousel__wrapper'>
        <div className='carrousel__track' style={{transform: `translateX(-${currentSlide * slideWidth}%)`}}>
          {carrousels.map(item => (
            <div key={item.id} className='carrousel__slide'>
              <img src={item.imageUrl} alt={item.title} className='carrousel__image' />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className='carrousel__control carrousel__control--prev'>
        &#10094;
      </button>
      <button onClick={nextSlide} className='carrousel__control carrousel__control--next'>
        &#10095;
      </button>
    </div>
  );
};

export default Carrousel;
