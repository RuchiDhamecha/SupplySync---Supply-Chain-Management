import { CustomersDataTypesD } from "../../../screens/distributorScreen/Customers/Customers.types";

 export interface ModalAddCustProps {
    isOpen: boolean;
    onClose: () => void;
    onAddCustomer: (customer: CustomersDataTypesD) => void;
 } 
