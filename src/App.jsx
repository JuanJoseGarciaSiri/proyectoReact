import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Details from './components/ItemDetailContainer/ItemDetail';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <>
      <div>
        <Header logo="PREMIER STORE" />
      </div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/item/:id' element={<ItemDetail/>} />
      </Routes>
    </>  
  )
}

export default App;
