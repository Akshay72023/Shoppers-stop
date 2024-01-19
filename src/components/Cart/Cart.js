import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';

const Cart =(props)=>{
  const cartctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((item) => {
        const total = (item.quantity.large + item.quantity.medium + item.quantity.small) * item.price;

        return (
          <li key={item.id} className="cart-item">
            <div className={classes['cart-item-details']}>
              <div className={classes["item-name"]}>{item.name}</div>
              <div className={classes["item-description"]}>{item.description}</div>
              <div className={classes["item-price"]}>`${item.price}`</div>
            </div>
            <div >
              <div className={classes["item-quantities"]}>L: {item.quantity.large}</div>
              <div className={classes["item-quantities"]}>M: {item.quantity.medium}</div>
              <div className={classes["item-quantities"]}>S: {item.quantity.small}</div>
              <div className={classes["item-quantities"]}>Total: {total}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  
  let totalPrice=0;
  cartctx.items.forEach((item)=>{
    let totalItems = (+item.quantity.large)+(+item.quantity.medium)+(+item.quantity.small);
    totalPrice += totalItems*item.price;
  });
    return (
        <Modal onBackDropClick={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>`${totalPrice}`</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      );
};

export default Cart;

