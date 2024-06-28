import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Notifications.module.scss"; 
import { NotificationsProps } from "./Notifications.types.ts" 
 
const NotificationsD = ({}: NotificationsProps) => { 
    return(
        <div>
            <div>
                <SideBarDistributor/>
            </div>
        </div>
    ) 
} 
 
export default NotificationsD 
