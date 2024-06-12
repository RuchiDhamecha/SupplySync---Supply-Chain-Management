import SideBar from "../../../components/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Orders.module.scss";
import { OrdersProps } from "./Orders.types.ts";

const Orders = ({}: OrdersProps) => {
  return (
    <div>
      <div>
        <NavBar />
       
      </div>
    </div>
  );
};

export default Orders;
