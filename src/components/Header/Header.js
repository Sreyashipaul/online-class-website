import React from 'react';
import logo from '../../Images/logo.png';
import  '../Header/Header.css';
const Header = () => {
    return (
        <div>
            <div className='header'>
             <img src={logo} alt="" />   
            
        </div>
        </div>
    );
};

export default Header;