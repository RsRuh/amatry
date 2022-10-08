import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-xl font-bold flex justify-evenly bg-pink-800 text-white py-5'>
            <Link to='/'>Shop</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;