import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/ItemListContainer/itemCount';
import Card from './components/ItemListContainer/Item';

function App() {
 
  const [counter,setCounter]=useState(0);
  const [product,setProduct]=useState([]);
  const isValidCounter = counter > 0;
 
  const AumentarCount = ()=>{
      setCounter((prevCounter)=>prevCounter + 1);
  };
  const DisminuirCount =()=>{
    if (isValidCounter)
      setCounter((prevCounter)=>prevCounter - 1);
    else ;  
  };
  useEffect(()=>{
    const productos = async()=>{
      try {
        const response=await fetch('https://64ac7c189edb4181202f9368.mockapi.io/products',{
          method:'GET',
          headers:{
            'content-type':'application/json',
          },
        })
        const data= await response.json();
        setProduct(data);
      } catch (error) {
      }
    }
    productos(),[]
  })
  return (
    <>
      <div>
        <Header logo="PREMIER STORE"/>   
      </div>
      <ItemListContainer greeting=" Bienvenido a Premier Store!"/>
      <div className='cards'>
       { product.map((product)=>(
        <Card {...product}/>
        ))
     } </div>
    </>
  )
}

export default App;
