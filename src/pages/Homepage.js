import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/product/actions";
import { selectProduct } from "../store/product/selectors";

export default function HomePage() {
  const products = useSelector(selectProduct);
  console.log("selected products", products);
  const dispatch = useDispatch();
  const [filter, set_filter] = useState();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  function compare_price(product1, product2) {
    return product1.price - product2.price;
  }

  const sortedProducts = products.sort(compare_price);

  return (
    <div>
      {sortedProducts.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* <Link to={`/Post/${product.id}`}>See product details</Link> */}
            <p>€ {product.price}</p>
            <p>{product.description}</p>
            <button onClick={(e) => console.log(product.id)}>
              Shopping Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
