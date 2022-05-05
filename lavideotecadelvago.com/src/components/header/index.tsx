import * as React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function Header() {
    return(
        <div>
        <div className='header'>
            <div className='pad'></div>
            <div className='top-title'>
                <h1 className={'Title'}><Link to='/'>lavideotecadelvago.com</Link></h1>
            </div>
            <div className='login-signup'>
                <Link to='/login'><strong>Iniciar Sesion</strong></Link>
                /
                <Link to='/signup'>Registrarse</Link>
            </div>
        </div>
        <div className='post-header'></div>
        </div>
    );
}

export default Header;