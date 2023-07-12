import './ItemDetailStyle.css';


const Details= ({name,image,description,stock,price})=>{
  
  return (
        <div className='containerD'>
        <div className='cardDet'>
        <img className='imagenCardD' src={image} alt={name}></img>
      <div className='cardBodyD'>
         <h2 className='nombreProdD'>{name}</h2>
         <p className='ProdDet'>{description}</p>
         <h3 className='ProdDet'>US$ {price}</h3>
         <p className='ProdDet'>{stock} left</p>
      </div> 
      <div className='botonesDet'>
        <button className='botonCartD'><p className='ProdDet'>Add to Cart</p></button>
      </div>
     </div>
     </div>
    )
}

export default Details