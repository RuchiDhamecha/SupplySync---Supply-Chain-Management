import { useEffect, useState } from "react";
import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Customers.module.scss";
import { CustomersDataTypesD, CustomersProps } from "./Customers.types.ts";
import CustRowD from "../../../components/DistributorCompoents/CustRowD/CustRowD.tsx";
import ModalAddCust from "../../../components/DistributorCompoents/ModalAddCust/ModalAddCust.tsx";
import { createCustomer, customersScreen, deleteCustomer, updateCustomer } from "../../../auth/distCustomer.ts";

const CustomersD = ({}: CustomersProps) => {
  const [customers, setCustomer] = useState<CustomersDataTypesD[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getdata = async () => {
    try {
      const customerScreenResponse = await customersScreen();
      setCustomer(customerScreenResponse);
      console.log(customerScreenResponse.data);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };
  const handleUpdatePcustomer = async (updatedCustomer: CustomersDataTypesD) => {
    try {
      await updateCustomer(updatedCustomer);
      setCustomer(
        customers.map((customer) =>
          customer._id === updatedCustomer._id ? updatedCustomer : customer
        )
      );
    } catch (error: any) {
      console.log("Update error", error.message);
    }
  };

  const handleDeletePcustomer = async (pcustomerId: string) => {
    try {
      await deleteCustomer(pcustomerId);
      setCustomer(customers.filter((customer) => customer._id !== pcustomerId));
    } catch (error: any) {
      console.log("Delete error", error.message);
    }
  };

  const handleAddPcustomer = async (newPcustomer: CustomersDataTypesD) => {
    try {
      const response = await createCustomer(newPcustomer);
      setCustomer([...customers, response.data]);
    } catch (error: any) {
      console.log("Add error", error.message);
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
      <div className={styles.Customers}>
        <p className={styles.Flexx}>
          <h2>Customers</h2>
          <button onClick={() => setIsModalOpen(true)}>+ ADD Pcustomer</button>
        </p>

        <div className={`${styles.Flex} `}>
          <span>Name</span>
          <span>Email</span>
          <span>Mobile No. 📞</span>
          <span>City 📍</span>
        </div>
        <div className={styles.CustScreen}>
          {customers.map((distItem: any) => (
            <CustRowD
              key={distItem._id}
              customer={distItem}
              onUpdate={handleUpdatePcustomer}
              onDelete={handleDeletePcustomer}
            />
          ))}
        </div>
        <ModalAddCust
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCustomer={handleAddPcustomer}
      />
      </div>
    </div>
  );
};

export default CustomersD;

