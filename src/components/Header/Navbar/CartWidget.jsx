import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget =()=>{
    const Comprados = 2;
    return(
        <div className="cart">
        <a href="#" ><FaShoppingCart /></a>
        <div className="compra">{Comprados}</div>
        </div>
    )
}

export default CartWidget;