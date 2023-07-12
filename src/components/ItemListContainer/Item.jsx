import './ItemStyles.css';
import Counter from './itemCount';
import { useState } from 'react';

const Card= ({name,id,image,description,stock,price,onShowDetails})=>{
  
  const [counter,setCounter]=useState(0);
  const isValidCounter = counter > 0;
  const AumentarCount = ()=>{
    if (counter < stock)
      setCounter((prevCounter)=>prevCounter + 1);
      else ;
  };
  const DisminuirCount =()=>{
    if (isValidCounter)
      setCounter((prevCounter)=>prevCounter - 1);
    else ;  
  }; 
  return (
        <div className='container'>
        <div key={id} className='card' onClick={()=>onShowDetails(id)}>
        <img className='imagenCard' src={image} alt={name}></img>
      <div className='cardBody'>
         <h2 className='nombreProd'>{name}</h2>
         <p className='Prod'>{description}</p>
         <h3 className='Prod'>US$ {price}</h3>
         <p className='Prod'>{stock} left</p>
      </div> 
      <div className='botones'>
        <button className='botonCart'><p className='Prod'>Add to Cart</p></button>
      </div>
      {/* <div className='cont'>
        <Counter isValidCounter={isValidCounter} onRemove={DisminuirCount} onAdd={AumentarCount} counter={counter} />
       </div>*/}
     </div>
     </div>
    )
}

export default Card