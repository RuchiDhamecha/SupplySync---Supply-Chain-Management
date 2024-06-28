import SideBarDistributor from "../../layout/SideBarDistributor/SideBarDistributor.tsx";
import Orders from "../../screens/distributorScreen/Orders/Orders.tsx";
import ProductsD from "../../screens/distributorScreen/Products/Products.tsx";
import styles from "./Distributor.module.scss"; 
import { DistributorProps } from "./Distributor.types.ts" 
 
const Distributor = ({}: DistributorProps) => { 
    return(
        <div>
            <div>
                <SideBarDistributor/>
            </div>
            <div>
                <ProductsD/>
            </div>
        </div>
    )
} 
 
export default Distributor 
