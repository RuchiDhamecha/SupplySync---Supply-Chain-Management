import SideBar from "../../../layout/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Orders.module.scss";
import { OrdersProps } from "./Orders.types.ts";

const Orders = ({}: OrdersProps) => {
  return (
    <div>
      <div>
      <SideBar />
       
      </div>
    </div>
  );
};

export default Orders;
