const initialState = {
  products: [],
  loading: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "products/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "products/productsFetched": {
      return {
        loading: false,
        products: [...state.products, ...action.payload],
      };
    }
    default:
      return state;
  }
}
