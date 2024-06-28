import { OrdersPropsM } from "../../../screens/manufacturerScreen/Orders/Orders.types";


export interface OrderRowProps {
    order: OrdersPropsM;
    onAccept: (orderId: string) => void;
    onReject: (orderId: string) => void;
    showActions: boolean; 
  }