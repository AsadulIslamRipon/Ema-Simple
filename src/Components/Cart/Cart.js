import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for( const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = tax + shipping + totalPrice;


    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='total-grand'>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;