import AppRoutes from './routes/AppRoutes';
import {NavBar} from './components/NavBar';
import Footer from './components/Footer';

import './styles/global.css';
import './App.css';

function App() {
  return (
    <>
      <NavBar />

      <AppRoutes></AppRoutes>

      <Footer />
    </>
  );
}

export default App;
