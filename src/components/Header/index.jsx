import React from 'react';
import './stylesHeader.css';
import Navbar from './Navbar/Navbar';


const Header = () => {
    return(
        <header className='cabecera'>
            <div>
               <a href='#' ><h1 className='logoTitulo'> PREMIER STORE </h1></a>
            </div>
            <div>
                <nav>
                    <Navbar/>
                </nav>
            </div>
        </header>
    )
}

export default Header;