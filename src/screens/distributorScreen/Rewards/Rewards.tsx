import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Rewards.module.scss"; 
import { RewardsProps } from "./Rewards.types.ts" 
 
const RewardsD = ({}: RewardsProps) => {
    return(
<div>
            <div>
                <SideBarDistributor/>
            </div>
        </div>    )  
} 
 
export default RewardsD 
