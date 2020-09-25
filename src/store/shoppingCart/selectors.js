export function selectCart(reduxState) {
  console.log("STATE cart", reduxState);
  return reduxState.cart.items;
}
