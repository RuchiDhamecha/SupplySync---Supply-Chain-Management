import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Orders.module.scss"; 
import { OrdersProps } from "./Orders.types.ts" 
 
const OrdersD = ({}: OrdersProps) => { 
    return(
        <div>
            <div>
                <SideBarDistributor/>
            </div>
        </div>
    ) 
} 
 
export default OrdersD 
