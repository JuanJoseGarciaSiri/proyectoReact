import React from "react";
import './ItemListContainerStyles.css';


const ItemListContainer= ({greeting})=>{
    return(
        <div className="saludo">
        <h1 className="bienvenida">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;