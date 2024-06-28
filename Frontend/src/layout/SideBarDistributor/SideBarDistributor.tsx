import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.tsx";
import styles from "./SideBarDistributor.module.scss"; 
import { SideBarDistributorProps } from "./SideBarDistributor.types.ts" 
 
const SideBarDistributor = ({}: SideBarDistributorProps) => { 
    return(
        <div>
        <NavBar/>
        <div className={styles.Sidebar}>
        <ul>
          <li><Link to="/distributor/products">Products</Link></li>
          <li><Link to="/distributor/orders">Orders</Link></li>
          <li><Link to="/distributor/customers">Customers</Link></li>
          <li><Link to="/distributor/sales">Sales</Link></li>
          <li><Link to="/distributor/reports">Report</Link></li>
          <li><Link to="/distributor/rewards">Rewards</Link></li>
          <li><Link to="/distributor/notifications">Notification</Link></li>
        </ul>
      </div>
      </div>
    )
} 
 
export default SideBarDistributor 
