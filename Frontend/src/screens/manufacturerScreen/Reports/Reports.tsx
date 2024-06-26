import SideBar from "../../../layout/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Reports.module.scss";
import { ReportsProps } from "./Reports.types.ts";

const Reports = ({}: ReportsProps) => {
  return (
    <div>
      <div>
      <SideBar />
      
      </div>
      <div className={styles.Reports}>
        <h2>
          Report
        </h2>
      </div>
    </div>
  );
};

export default Reports;
