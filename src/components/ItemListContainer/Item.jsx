import './ItemStyles.css';

const Card= ({name,id,image,description,stock,price})=>{
    return (
        <div className='container'>
        <div key={id} className='card'>
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
     </div>
     </div>
    )
}

export default Card