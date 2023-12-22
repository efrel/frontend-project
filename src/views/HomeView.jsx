import {Banner} from './../components/Banner';
import Carrousel from './../components/Carrousel';
import CategoryMenu from './../components/CategoryMenu';
import ProductGrid from './../components/ProductGrid';

import './../styles/home.css';

const HomeView = () => {
  return (
    <div>
      <Banner />

      <Carrousel />
      <div className='container__home'>
        <CategoryMenu />
        <ProductGrid />
      </div>
    </div>
  );
};

export default HomeView;
