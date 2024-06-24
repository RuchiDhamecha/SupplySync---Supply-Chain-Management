import { ordersDataTypes } from "../../../screens/distributorScreen/Orders/Orders.types";

 export interface OrdersCardDProps {
   order: ordersDataTypes;
   onAddToCart: (order: ordersDataTypes) => void;
   onOrderNow: (order: ordersDataTypes) => void;
 } 
