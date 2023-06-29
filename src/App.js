import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import Product from './components/Products/Products.jsx';
import { productData, productDataTwo } from './components/Products/data';
import Bestseller from './components/Bestseller/Bestseller.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Main />
      <Product heading='Selecciona tu preferida' data={productData} />
      <Bestseller />
      
      <Product heading='Otras opciones' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
