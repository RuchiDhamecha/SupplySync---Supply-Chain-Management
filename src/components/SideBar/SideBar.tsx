import styles from "./SideBar.module.scss"; 
import { SideBarProps } from "./SideBar.types.ts" 
import { Link } from 'react-router-dom';
 
const SideBar = ({}: SideBarProps) => { 
    return(
        <div className={styles.Sidebar}>
        <ul>
          <li><Link to="/manufacturer/products">Products</Link></li>
          <li><Link to="/manufacturer/distributors">Distributors</Link></li>
          <li><Link to="/manufacturer/orders">Orders</Link></li>
          <li><Link to="/manufacturer/rewards">Rewards</Link></li>
          <li><Link to="/manufacturer/reports">Report</Link></li>
          <li><Link to="/manufacturer/customers">Customer</Link></li>
        </ul>
      </div>
    )
} 
 
export default SideBar 
