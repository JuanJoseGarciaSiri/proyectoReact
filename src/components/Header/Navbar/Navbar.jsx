import React from "react";
import './stylesNav.css';
import CartWidget from "./CartWidget";


const Navbar = ()=>{
    return(
 <> 
   <div className="container">
        <ul className="listaNav">
           <a href="#" ><li>Principal</li></a>
           <a href="#" ><li>Catalogo</li></a>
           <a href="#" ><li>Nosotros</li></a>
           <a href="#" ><li>Contacto</li></a>
         </ul>
   <CartWidget/>
   </div>
      </>
    )
}

export default Navbar;