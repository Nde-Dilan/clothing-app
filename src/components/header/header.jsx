import React from 'react';

import {ReactComponent as logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import './header.scss'
const Header = ()=>{
return (
    <div className="header">
        <Link className='logo-container' to="/">
        <logo className="logo"></logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
        </div>
    </div>
)

}

export default Header;