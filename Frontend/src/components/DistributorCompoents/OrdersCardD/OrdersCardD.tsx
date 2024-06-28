import React from "react";
import styles from "./OrdersCardD.module.scss";
import { OrdersCardDProps } from "./OrdersCardD.types";

const OrdersCardD = ({ order, onAddToCart, onOrderNow }:OrdersCardDProps) => {
  return (
    <div className={styles.OrderCard}>
      <img src={order.product_image} alt={order.product_name} />
      <h3>{order.product_name}</h3>
      <p>Price: {order.product_price}</p>
      <div className={styles.Buttons}>
        <button onClick={() => onAddToCart(order)} className={styles.AddToCartBtn}>
          Add to Cart
        </button>
        <button onClick={() => onOrderNow(order)} className={styles.OrderNowBtn}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrdersCardD;
