import React, { useState } from 'react';
import './App.css';
import Players from './components/Players/Players';
import Cart from './components/Cart/Cart';
import Promo from './components/Promo/Promo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cart, setCart] = useState([]);
  const addToCartHandler = product => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <>
      
      <Promo></Promo>
      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Players addToCartHandler={addToCartHandler}></Players>
            </div>
            <div className="col-lg-3">
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
      </main>
    
    </>
  );
}

export default App;
