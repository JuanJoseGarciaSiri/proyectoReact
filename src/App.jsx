import "./App.css";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Index";
import ItemDetail from "./pages/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <Link to="/">
          <Header logo="PREMIER STORE" />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </>
  );
}

export default App;
