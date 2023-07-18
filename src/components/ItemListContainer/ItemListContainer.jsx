import React, { useEffect, useState } from "react";
import "./ItemListContainerStyles.css";
import Card from "./Item";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants/index";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const { data: products, loading, error } = useFetch(
    API_URLS.PRODUCTS.url,
    API_URLS.PRODUCTS.config
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = products.filter((product) => product.category.toLowerCase() === categoryId.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId, products]);
  

  return (
    <div>
      <div className="saludo">
        <h1 className="bienvenida">{greeting}</h1>
      </div>
      {loading && <p>...Cargando</p>}
      <div className="cards">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      {error && <p>Algo ha salido mal</p>}
    </div>
  );
};

export default ItemListContainer;
