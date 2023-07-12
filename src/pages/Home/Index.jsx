import { useEffect, useState } from 'react'
import './Styles.css'
import Header from '../../components/Header'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Card from '../../components/ItemListContainer/Item';
import Details from '../../components/ItemDetailContainer/ItemDetail';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail,setProductDetail]=useState(null);
 
 
  const onShowDetails=(id)=>{
    setShowDetails(true);
    const findProducts=product.find((product)=>product.id===id);
    setProductDetail(findProducts); 
  }

  useEffect(() => {
    const productos = async () => {
      try {
        const response = await fetch('https://64ac7c189edb4181202f9368.mockapi.io/products', {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        })
        const data = await response.json();
        setProduct(data);
      } catch (error) {
      }
    }
    productos(), []
  })


  return (
    <>
      <div>
        <Header logo="PREMIER STORE" />
      </div>
      <ItemListContainer greeting=" Bienvenido a Premier Store!" />
      {showDetails ? (
        <>
        <div>
        <button onClick={() => setShowDetails(false)} className='botonVolver'>Volver</button>
        <Details {...productDetail}/>
        </div>
      </>
      ):(
      <div className='cards'>
        {product.map((product) => (
          <Card {...product} onShowDetails={onShowDetails}/>
        ))
        } </div>
      )}

    </>
   
  )
}

export default Home;
