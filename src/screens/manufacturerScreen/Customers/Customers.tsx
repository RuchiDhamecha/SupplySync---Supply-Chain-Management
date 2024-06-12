import SideBar from "../../../components/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Customers.module.scss";
import { CustomersProps } from "./Customers.types.ts";

const Customers = ({}: CustomersProps) => {
  return (
    <div>
      <div>
        <NavBar />
       
      </div>
    </div>
  );
};

export default Customers;
