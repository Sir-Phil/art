import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screen/HomeScreen';
import ProductDescScreen from './screen/ProductDescScreen';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Subnav from './components/subnavbar/Subnav';
import DailySlide from './components/dailyslide/DailySlide';

function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Subnav />
        <DailySlide />
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/products/:id" element={<ProductDescScreen/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
