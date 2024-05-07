import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFOund from './components/404/404';
import About from './components/about/About';
import Login from './components/auth/login/Login';
import Rejester from './components/auth/rejester/Rejester';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import Product from './components/products/product/Product';
import Footer from './components/footer/Footer';
import { cardData } from './data/cartData';
import { useState } from 'react';

function App() {
  const [cartNum, setCartNum] = useState(cardData.length)
  return (
    <div className="App">
      <Header cartNum = {cartNum} setCartNum={setCartNum} /> 
      <Routes>
        <Route path='/' element={<Home setCartNum={setCartNum} />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rejester' element={<Rejester />} />
        <Route path='/cart' element={<Cart setCartNum={setCartNum} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products setCartNum={setCartNum} />} />
        <Route path='/products/:productId' element={<Product setCartNum={setCartNum} />} />
        <Route path='*' element={<NotFOund />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
