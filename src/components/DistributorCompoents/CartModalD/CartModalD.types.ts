import { ordersDataTypes } from "../../../screens/distributorScreen/Orders/Orders.types";

 export interface CartModalDProps {
    isOpen: boolean;
    onClose: () => void;
    orders: ordersDataTypes[];
 } 
