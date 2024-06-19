import SideBar from "../../../layout/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Distributors.module.scss";
import { DistributorsDataTypes, DistributorsProps } from "./Distributors.types.ts";
import DistRow from "../../../components/ManuFacturerComponent/DistRow/DistRow.tsx";
import { useEffect, useState } from "react";
import { createDistributor, deleteDistributor, distributorsScreen, updateDistributor } from "../../../auth/manuDistributor.ts";
import ModalAddDist from "../../../components/ManuFacturerComponent/ModalAddDist/ModalAddDist.tsx";

const Distributors = ({}: DistributorsProps) => {
  const [distributers, setDistributor] = useState<DistributorsDataTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const getdata = async () => {
    try {
      const distributorScreenResponse = await distributorsScreen();
      setDistributor(distributorScreenResponse);
      console.log(distributorScreenResponse.data )
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  const handleUpdateDistributor = async (updatedDistributor: DistributorsDataTypes) => {
    try {
      await updateDistributor(updatedDistributor);
      setDistributor(
        distributers.map((distributor) =>
          distributor._id === updatedDistributor._id ? updatedDistributor : distributor
        )
      );
    } catch (error: any) {
      console.log("Update error", error.message);
    }
  };

  const handleDeleteDistributor = async (distributorId: string) => {
    try {
      await deleteDistributor(distributorId);
      setDistributor(distributers.filter((distributor) => distributor._id !== distributorId));
    } catch (error: any) {
      console.log("Delete error", error.message);
    }
  };

  const handleAddDistributor = async (newPdistributor: DistributorsDataTypes) => {
    try {
      const response = await createDistributor(newPdistributor);
      setDistributor([...distributers, response.data]);
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
        <SideBar />
      </div>
      <div className={styles.Distributors}>
        <div className={styles.Flex}>
          <h1>All Distributors</h1>
          <button onClick={() => setIsModalOpen(true)}>+ ADD DISTRIBUTOR</button>
        </div>
        <div className={`${styles.Flex} ${styles.shadow}`}>
          <span>Name</span>
          <span>Email</span>
          <span>Mobile No. 📞</span>
          <span>City 📍</span>
          <span>Points 💰</span>
          {/* <button>Orders</button>
          <button>Customers</button> */}
          <button className={styles.Edit}>Edit 📝</button>
          <button >Delete 🗑</button>
        </div>
        <div className={styles.DistScreen}>
        {distributers.map((distItem:any) => (
          <DistRow
            key={distItem._id}
            distributor={distItem}
            onUpdate={handleUpdateDistributor}
            onDelete={handleDeleteDistributor}
          />
        ))}
      </div>
      <div>
        <ModalAddDist
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         onAddDistributor={handleAddDistributor}
         />
      </div>
      </div>
    </div>
  );
};

export default Distributors;