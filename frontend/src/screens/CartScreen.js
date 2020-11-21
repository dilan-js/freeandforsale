import React from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  /*
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    -----
    This line basically is getting the qty part of the url in Product Screen: props.history.push(`/cart/${productId}?qty={qty}`);
    The [1] is index 1 of qty={qty} -- qty is index 0 and {qty} is index 1. 
    */
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
}
