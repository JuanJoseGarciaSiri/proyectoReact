import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  return (
    <>
      <div>
        <Header/>   
      </div>
      <ItemListContainer greeting="Hola Bienvenido a Premier Store!"/>
    </>
  )
}

export default App;
