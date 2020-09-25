import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/product/actions";
import { selectProduct } from "../store/product/selectors";

export default function HomePage() {
  const products = useSelector(selectProduct);
  console.log("selected products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to our fancy webshop!</h1>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* <Link to={`/Post/${product.id}`}>See product details</Link> */}
            <p>€ {product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}
