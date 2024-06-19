import { DistributorsDataTypes } from "../../../screens/manufacturerScreen/Distributors/Distributors.types";

 export interface ModalAddDistProps {
    isOpen: boolean;
    onClose: () => void;
    onAddDistributor: (distributor: DistributorsDataTypes) => void;
 } 
