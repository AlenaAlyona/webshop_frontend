const initialState = {
  items: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        items: [...state.items, ...action.payload],
      };
    }
    default:
      return state;
  }
}
