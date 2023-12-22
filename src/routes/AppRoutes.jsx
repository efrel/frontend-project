import {Routes, Route} from 'react-router-dom';
import HomeView from '../views/HomeView';
import ShopsView from '../views/ShopsView';
import OffersView from '../views/OffersView';
import ContactView from '../views/ContactView';
import NotFoundView from '../views/NotFoundView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/shops' element={<ShopsView />} />
      <Route path='/offers' element={<OffersView />} />
      <Route path='/contact' element={<ContactView />} />
      <Route path='*' element={<NotFoundView />} /> {/* Ruta comodín para no encontrados */}
    </Routes>
  );
};

export default AppRoutes;
