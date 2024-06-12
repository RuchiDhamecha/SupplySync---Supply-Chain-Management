import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types.ts";
import logo from "../../assets/favicon.png";
import SideBar from "../../components/SideBar/SideBar.tsx";
const NavBar = ({}: NavBarProps) => {
  return (
    <div>
      <div className={styles.NavBar}>
        <span>
          <img src={logo} alt="" />
        </span>
        <h2>SupplySync</h2>
      </div>
      <SideBar />
    </div>
  );
};

export default NavBar;
