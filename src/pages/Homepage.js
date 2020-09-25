import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/product/actions";
import { selectProduct } from "../store/product/selectors";

export default function HomePage() {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      <p>I am a proud HOMEPAGE</p>
      <p>
        {/* 
        {data.loading ? ({ // data not in React state anymore */}
        {products ? (
          <em>Loading...</em>
        ) : (
          /* <button onClick={fetchNext5Posts}>Load more</button> //  the action now is managed by an action dispatcher as below*/

          <button /* onClick={() => dispatch(fetchNext5Posts)} */>
            Load more
          </button> // we use an anonymouse function to call dispach the action
        )}
      </p>
    </div>
  );
}
