import React, { useEffect, useState } from "react";
import IsLoadingHOC from "./IsLoadingHOC";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const { setLoading } = props;

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products &&
        products.map((item) => (
          <div key={item.id}>
            <h5>{item.title}</h5>
          </div>
        ))}
    </>
  );
};

export default IsLoadingHOC(ProductList);
