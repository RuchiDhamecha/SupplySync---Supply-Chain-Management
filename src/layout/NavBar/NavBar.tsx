import styles from "./NavBar.module.scss"; 
import { NavBarProps } from "./NavBar.types.ts" 
import logo from '../../assets/favicon.png'
const NavBar = ({}: NavBarProps) => { 
    return(
        <div className={styles.NavBar}>
            <span><img src={logo} alt="" /></span>
            <h2>SupplySync</h2>
        </div>
    )
} 
 
export default NavBar 
