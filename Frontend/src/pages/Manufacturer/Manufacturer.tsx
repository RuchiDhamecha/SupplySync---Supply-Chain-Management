import SideBar from "../../layout/SideBar/SideBar.tsx";
import NavBar from "../../layout/NavBar/NavBar.tsx";
import Products from "../../screens/manufacturerScreen/Products/Products.tsx";
import styles from "./Manufacturer.module.scss";
import { ManufacturerProps } from "./Manufacturer.types.ts";

const Manufacturer = ({}: ManufacturerProps) => {
  return (
    <div>
      <SideBar />
      <div className={styles.Flex}>
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
