import { CustomersDataTypesD } from "../../../screens/distributorScreen/Customers/Customers.types";

export interface CustRowDProps {
    customer: CustomersDataTypesD;
    onUpdate: (customer: CustomersDataTypesD) => void;
    onDelete: (customerId: string) => void;
}

export interface CustomerFormInputs {
    customer_name: string;
    customer_price: number;
    customer_description: string;
    customer_image: string;
}