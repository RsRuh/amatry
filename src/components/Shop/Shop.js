import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([]);
    
    console.log(cart);

    const handleAddBtn = (upcomingProduct)=>{
        
        let newCart = [];

        const exist = cart.find(product=> upcomingProduct.id === product.id);
        if(!exist){
            upcomingProduct.quantity = 1;
            newCart = [...cart, upcomingProduct]

        }
        else{
            upcomingProduct.quantity = upcomingProduct.quantity + 1;
            const rest = cart.filter(product=> product.id !== upcomingProduct.id)
            newCart = [ ...rest, exist]
        }
        setCart(newCart)
    }

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 mt-10 grid grid-cols-3 gap-10 justify-items-center'>
            {
                products.map(product=><Product product={product} handleAddBtn={handleAddBtn} key={product.key}></Product>)
            }
            </div>
            <div className='bg-green-400'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;