import React, { useContext, useState } from 'react';
import './TshirtItem.css';
import CartContext from '../store/cart-context';

const TshirtItem = (props) => {
  const { id, name, description, price, largeQuantity, mediumQuantity, smallQuantity } = props; 
  const quantity={
    large:0,
    medium:0,
    small:0
  };
  const [localQuantity,setLocalQuantity]=useState({
    large:+largeQuantity,
    medium: +mediumQuantity,
    small: +smallQuantity,
  });
  
  const cartctx = useContext(CartContext);

  const handleBuy = (size) => {
    setLocalQuantity((prevQuantity)=>({
      ...prevQuantity,
      [size]: prevQuantity[size] - 1,
    }));

    const updatedQuantity = { ...quantity, [size]: quantity[size] + 1 };
    const existingItemIndex = cartctx.items.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartctx.items];
      updatedItems[existingItemIndex].quantity[size] += 1;

      cartctx.updateItemQuantity(updatedItems);
    } else {
      cartctx.addItem({
        id: id,
        name: name,
        description: description,
        price: price,
        quantity: updatedQuantity,
      });
    }
  };

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div>
        <button onClick={() => handleBuy('large')} disabled={quantity.large < 0}>
          Buy large tshirt - {localQuantity.large}
        </button>
        <button onClick={() => handleBuy('medium')} disabled={quantity.medium < 0}>
          Buy medium tshirt - {localQuantity.medium}
        </button>
        <button onClick={() => handleBuy('small')} disabled={quantity.small < 0}>
          Buy small tshirt - {localQuantity.small}
        </button>
      </div>
    </li>
  );
};

export default TshirtItem;
