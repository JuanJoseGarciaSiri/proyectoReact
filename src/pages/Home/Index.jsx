import { useEffect, useState } from 'react'
import './Styles.css'
import Header from '../../components/Header'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Card from '../../components/ItemListContainer/Item';
import Details from '../../components/ItemDetailContainer/ItemDetail';
import { useFetch } from '../../hooks/useFetch';
import { API_URLS } from '../../constants/index';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const navigate=useNavigate();
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail,setProductDetail]=useState(null);
  const {data:products,loading,error}=useFetch(API_URLS.PRODUCTS.url,API_URLS.PRODUCTS.config);

  useEffect(() => {
    setProduct(products);
  }, [products]);

  const onShowDetails=(id)=>{
   navigate(`/item/${id}`) 
  }

  return (
    <>
      <div>
        <Header logo="PREMIER STORE" />
      </div>
      <ItemListContainer greeting=" Bienvenido a Premier Store!" />
      {loading && <p>...</p>}
      (
      <div className='cards'>
        {product.map((product) => (
          <Card {...product} onShowDetails={onShowDetails}/>
        ))
        } </div>
      )

    </>
   
  )
}

export default Home;