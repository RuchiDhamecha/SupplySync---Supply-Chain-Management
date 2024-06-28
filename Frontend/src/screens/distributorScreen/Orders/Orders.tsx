import { useEffect, useState } from "react";
import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Orders.module.scss";
import { OrdersProps, ordersDataTypes } from "./Orders.types.ts";
import { addToCart, fetchCartOrders, ordersScreen, placeOrderNow } from "../../../auth/distOrders.ts";
import OrdersCardD from "../../../components/DistributorCompoents/OrdersCardD/OrdersCardD.tsx";
import CartModalD from "../../../components/DistributorCompoents/CartModalD/CartModalD.tsx";
import Notification from "../../../components/Notification/Notification";

const OrdersD = ({}: OrdersProps) => {
  const [orders, setOrders] = useState<ordersDataTypes[]>([]);
  const [cartOrders, setCartOrders] = useState<ordersDataTypes[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const getdata = async () => {
    try {
      const ordersScreenResponse = await ordersScreen();
      setOrders(ordersScreenResponse);
      // console.log(ordersScreenResponse);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  const handleAddToCart = async (order: ordersDataTypes) => {
    try {
      const { product_name, product_price, quantity = 1 } = order;
      await addToCart({ product_name, product_price, quantity });
      setCartOrders([...cartOrders, { ...order, quantity }]);
      setNotificationMsg("Added to cart successfully!");
    } catch (error: any) {
      setNotificationMsg("Failed to add to cart.");
    } finally {
      setTimeout(() => {
        setNotificationMsg(null);
      }, 3000); 
    }
  };

  const handleOrderNow = async (order: ordersDataTypes) => {
    try {
      const { product_name, product_price } = order;
      const quantity = 1; 
      await placeOrderNow({ product_name, product_price, quantity });
      setNotificationMsg("Order placed successfully!");
    } catch (error: any) {
      console.error("Order Now error:", error.message);
      setNotificationMsg("Failed to place order.");
    } finally {
      setTimeout(() => {
        setNotificationMsg(null);
      }, 3000); 
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetchCartOrders();
      setCartOrders(response);
    } catch (error: any) {
      console.log("Fetch Cart error", error.message);
      setNotificationMsg("Failed to fetch cart orders.");
    }
    finally {
      setTimeout(() => {
        setNotificationMsg(null);
      }, 3000); 
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <SideBarDistributor />
      </div>
      <div>
        {notificationMsg && <Notification msg={notificationMsg} />}
        <div className={styles.Top}>
          <div>
            <h2 className={styles.head}>My Orders</h2>
          </div>
          <button
            onClick={() => {
              setIsCartModalOpen(true);
              fetchCart();
            }}
            className={styles.CartBtn}
          >
            View Cart
          </button>
        </div>
        <div className={styles.OrdersScreen}>
          {orders.map((orderItem: any) => (
            <OrdersCardD
              key={orderItem._id}
              order={orderItem}
              onAddToCart={handleAddToCart}
              onOrderNow={handleOrderNow}
            />
          ))}
        </div>
        <CartModalD
          isOpen={isCartModalOpen}
          onClose={() => setIsCartModalOpen(false)}
          orders={cartOrders}
        />
      </div>
    </div>
  );
};

export default OrdersD;
