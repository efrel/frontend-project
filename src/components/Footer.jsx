import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__top--section'>
        {/* Información de contacto */}
        <div className='footer__contact--info'>
          <h3 className='footer__title'>Unir</h3>
          <p>Col. MiraFlores, Tegucigalpa, Honduras</p>
          <p>actividad1@unir.net</p>
          <p>+129290122122</p>
          {/* Iconos de redes sociales */}
        </div>

        {/* Enlaces */}
        <div className='footer__links'>
          <h3 className='footer__title'>Explore</h3>
          {/* Lista de enlaces */}
        </div>

        <div className='footer__links'>
          <h3 className='footer__title'>Atención al cliente</h3>
          <p>Preguntas </p>
        </div>

        <div className='footer__links'>
          <h3 className='footer__title'>Suscríbase ahora</h3>
          <p>Suscriba su correo electrónico para recibir el boletín y las noticias destacadas según su interés</p>
        </div>
      </div>

      <div className='footer__bottom--section'>
        <p>©2023 Efrel Lopez. Copyright ©. All rights reserved worldwide.</p>
      </div>
    </footer>
  );
};

export default Footer;
