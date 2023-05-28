// rfce shortcut for the syntax

import React from 'react';
import Logo from "../logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-gradient-to-r from-purple-200 to-pink-200 border px-8 py-2 flex space-x-8 items-center'>
            <img className='w-[60px] md:w-[80px]' src={Logo} alt="Logo" />
            <Link to='/' className='text-red-400 text-xl md:text-3xl font-bold'>Home</Link>
            <Link to='items' className='text-red-400 text-xl md:text-3xl font-bold'>Cart</Link>
        </div>
    );
}

export default Navbar;
