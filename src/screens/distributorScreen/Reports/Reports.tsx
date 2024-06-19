import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Reports.module.scss"; 
import { ReportsProps } from "./Reports.types.ts" 
 
const ReportsD = ({}: ReportsProps) => { 
    return(
        <div>
            <div>
                <SideBarDistributor/>
            </div>
        </div>
    ) 
} 
 
export default ReportsD 
