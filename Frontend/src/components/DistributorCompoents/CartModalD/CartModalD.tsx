import React, { useState } from "react";
import styles from "./CartModalD.module.scss";
import { CartModalDProps } from "./CartModalD.types.ts";

const CartModalD = ({ isOpen, onClose, orders }: CartModalDProps) => {
  const [cartOrders, setCartOrders] = useState(orders);

  const handleQuantityChange = (orderId: string, change: number) => {
    setCartOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId
          ? { ...order, quantity: Math.max(1, order.quantity + change) }
          : order
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.CartModalOverlay}>
      <div className={styles.CartModal}>
        <h2>Cart</h2>
        <button onClick={onClose} className={styles.CloseBtn}>
          Close
        </button>
        <div className={styles.CartItems}>
          {cartOrders.map((order) => (
            <div key={order._id} className={styles.CartItem}>
              <h3>{order.product_name}</h3>
              <p>Price: {order.product_price}</p>
              <div className={styles.QuantityControls}>
                <button onClick={() => handleQuantityChange(order._id, -1)}>
                  -
                </button>
                <span>{order.quantity}</span>
                <button onClick={() => handleQuantityChange(order._id, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartModalD;
