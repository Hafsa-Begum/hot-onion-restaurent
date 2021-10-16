import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    console.log(cart)
    return (
        <div>
            <h1>this is cart {cart.id}</h1>
        </div>
    );
};

export default Cart;