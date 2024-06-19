import SideBar from "../../../layout/SideBar/SideBar.tsx";
import styles from "./Customers.module.scss";
import { CustomersDataTypes, CustomersProps } from "./Customers.types.ts";
import { useEffect, useState } from "react";
import CustRow from "../../../components/ManuFacturerComponent/CustRow/CustRow.tsx";
import { customersScreen } from "../../../auth/manuCustomer.ts";

const Customers = ({}: CustomersProps) => {
  const [customers, setCustomer] = useState<CustomersDataTypes[]>([]);

  const getdata = async () => {
    try {
      const customerScreenResponse = await customersScreen();
      setCustomer(customerScreenResponse);
      console.log(customerScreenResponse.data);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className={styles.Customers}>
        <p>
          <h2>Customers</h2>
        </p>

        <div className={`${styles.Flex} ${styles.shadow}`}>
          <span>Name</span>
          <span>Email</span>
          <span>Mobile No. 📞</span>
          <span>City 📍</span>
        </div>
        <div className={styles.CustScreen}>
          {customers.map((distItem: any) => (
            <CustRow key={distItem._id} customer={distItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
