import axios from "axios";

const API_URL = `http://localhost:4000/`;

export function startLoading() {
  return {
    type: "products/startLoading", //add to red
  };
}

// created an action for the feed with an action creator

export function productsFetched(data) {
  return {
    type: "feed/postsFetched",
    payload: data,
  };
}

// here we have our thunk

export async function fetchProducts(dispatch, getState) {
  dispatch(startLoading());

  const res = await axios.get(`${API_URL}/products`);

  dispatch(productsFetched(res));
}
