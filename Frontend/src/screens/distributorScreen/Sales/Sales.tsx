import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Sales.module.scss"; 
import { SalesProps } from "./Sales.types.ts" 
 
const SalesD = ({}: SalesProps) => { 
    return(
        <div>
            <div>
                <SideBarDistributor/>
            </div>
        </div>
    ) 
} 
 
export default SalesD 
