import Details from '../../components/ItemDetailContainer/ItemDetail'
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { API_URLS } from '../../constants';


function ItemDetail(){
    const{id}= useParams();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${id}`;
    console.log({id});
    const {data,loading,error}=useFetch(urlProductDetail,API_URLS.PRODUCTS.config);

    return(
        <>
        <div>  
        <button  className='botonVolver'>Volver</button>
        <Details {...data}/>
        </div>
        {loading && <p>cargando</p>}
        {error && <p>Algo ha salido mal</p>}
      </>
    )
}

export default ItemDetail