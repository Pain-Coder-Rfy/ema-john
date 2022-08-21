import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total+prd.price,0)
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice+product.price;
        
    }
    let shipping = 0;
    if(totalPrice>1000){
        shipping = 0;
    }else if(totalPrice>300){
        shipping = 10;
    }else if(totalPrice>0){
        shipping = 5;
    }
    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + shipping +Number(tax)).toFixed(2) ;
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
    <div>
            <h4>Order Summary</h4>
        <p>Item Ordered: {cart.length} </p>
        <p>Product Price: ${formatNumber(totalPrice)}</p>
        <p><small>Shipping Cost: ${shipping} </small></p>
        <p><small>Tax(10%): ${tax}</small></p>
        <p>Total price: ${grandTotal}</p>
    </div>
    );
};

export default Cart;