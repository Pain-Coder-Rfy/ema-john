import React from 'react';
import fakeData from './../../fakeData';
import { useState } from "react";
import './Shop.css';
import Product from './../Product/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProducts] = useState(firstTen);
    const[cart, setCart] = useState([]);


    const handleAddProduct = (product) =>{
         const newCart = [...cart, product];
         setCart(newCart);
    }


    return (    
        <div className="shop-container">
           <div className="product-container">
        
    {
        products.map(pd=><Product product={pd} handleAddProduct={handleAddProduct}>

        </Product>)

    }
            
           </div>
           <div className="cart-container">
            <Cart cart ={cart}>
           
            </Cart>
           </div>
           
        </div>
    );
};

export default Shop;