import Details from '../../components/ItemDetailContainer/ItemDetail'
import { useFetch } from '../../hooks/useFetch';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { API_URLS } from '../../constants';
import './Detail.css';


function ItemDetail(){
    const{id}= useParams();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${id}`;
    console.log({id});
    const {data,loading,error}=useFetch(urlProductDetail,API_URLS.PRODUCTS.config);
    const navigate = useNavigate();
    return(
        <>
        <div>  
        <button  onClick={()=>navigate(-1)} className='botonVolver'>Volver</button>
        <Details {...data}/>
        </div>
        {error && <p>Algo ha salido mal</p>}
      </>
    )
}

export default ItemDetail