import React from 'react';
import { useState } from 'react';
import './Cart.css';
<img src='' alt='' />;
const Cart = ({ cart }) => {
  const total = cart.reduce((salary, curr) => salary + curr.price, 0);
  const [catrbar, setCartbar] = useState(false);

  const chanbeBg = () => {
    if (window.scrollY >= 350) {
      setCartbar(true);
    } else {
      setCartbar(false);
    }
  };

  window.addEventListener('scroll', chanbeBg);

  return (
    <>
      <div className={catrbar ? 'cart bg-light p-2 active' : 'cart bg-light p-2 bg-light'}>
        <p className='text-center lead'>Players Selected In Club  ({cart.length})</p>
        <ul className='list-group my-4'>
          {cart.map((product) => (
            <li key={product.id} className='list-group-item'>
              {product.name} - {product.price} $
            </li>
          ))}
        </ul>
        <div className='checkout-btn text-center'>
          <button className='btn btn-warning w-100'>Total {total} $ </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
