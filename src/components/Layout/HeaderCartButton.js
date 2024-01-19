import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton=(props)=>{
    const cartctx= useContext(CartContext);
    let quantity=cartctx.cartNumber;
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    );
};

export default HeaderCartButton;