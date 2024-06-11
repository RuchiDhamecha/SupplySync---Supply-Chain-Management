import SideBar from "../../components/SideBar/SideBar.tsx";
import NavBar from "../../layout/NavBar/NavBar.tsx";
import Products from "../../screens/manufacturerScreen/Products/Products.tsx";
import styles from "./Manufacturer.module.scss";
import { ManufacturerProps } from "./Manufacturer.types.ts";

const Manufacturer = ({}: ManufacturerProps) => {
  return (
    <div>
      <NavBar />
      <div className={styles.Flex}>
        <div>
          <SideBar />
        </div>
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
