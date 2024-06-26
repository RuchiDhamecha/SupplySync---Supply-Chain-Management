import SideBar from "../../../layout/SideBar/SideBar.tsx";
import styles from "./Orders.module.scss";
import { OrdersPropsM } from "./Orders.types.ts";
import { useEffect, useState } from "react";
import {
  acceptOrder,
  fetchOrders,
  rejectOrder,
} from "../../../auth/manuOrders.ts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderRow from "../../../components/ManuFacturerComponent/OrderRow/OrderRow.tsx";

const Orders = () => {
  const [pendingOrders, setPendingOrders] = useState<OrdersPropsM[]>([]);
  const [acceptedOrders, setAcceptedOrders] = useState<OrdersPropsM[]>([]);
  const [rejectedOrders, setRejectedOrders] = useState<OrdersPropsM[]>([]);
  const [activeTab, setActiveTab] = useState<string>("pending");

  const displayOrders = async () => {
    try {
      const {
        pendingOrders,
        approvedOrders,
        rejectedOrders,
      } = await fetchOrders();
      setPendingOrders(pendingOrders || []);
      console.log(pendingOrders)
      setAcceptedOrders(approvedOrders || []);

      setRejectedOrders(rejectedOrders || []);
    } catch (err) {
      toast.error("Error fetching orders");
    }
  };

  const handleAccept = async (orderId: string) => {
    try {
      await acceptOrder(orderId);
      toast.success("Order accepted successfully");
      await displayOrders();
    } catch (err) {
      toast.error("Error accepting order");
    }
  };

  const handleReject = async (orderId: string) => {
    try {
      await rejectOrder(orderId);
      toast.success("Order rejected successfully");
      await displayOrders();
    } catch (err) {
      toast.error("Error rejecting order");
    }
  };

  useEffect(() => {
    displayOrders();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getOrdersByTab = () => {
    switch (activeTab) {
      case "pending":
        console.log(pendingOrders);
        return pendingOrders;
      case "accepted":
        return acceptedOrders;
      case "rejected":
        return rejectedOrders;
      default:
        return [];
    }
  };

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className={styles.Orders}>
        <div>
          <button onClick={() => handleTabChange("pending")}>
            Pending Orders
          </button>
          <button onClick={() => handleTabChange("accepted")}>
            Accepted Orders
          </button>
          <button onClick={() => handleTabChange("rejected")}>
            Rejected Orders
          </button>
        </div>

        <section>
          <h3>
            {activeTab === "pending"
              ? "Pending Orders"
              : activeTab === "accepted"
              ? "Accepted Orders"
              : "Rejected Orders"}
          </h3>
          <table>
            <thead>
              <tr>
                <th>Order Date</th>
                <th>Total Price</th>
                <th>Quantity</th>
                <th>Product Price</th>
                <th>Product Name</th>
                {activeTab === "pending" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {getOrdersByTab().map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  onAccept={handleAccept}
                  onReject={handleReject}
                  showActions={activeTab === "pending"}
                />
              ))}
            </tbody>
          </table>
        </section>

        <ToastContainer />
      </div>
    </div>
  );
};
export default Orders;
