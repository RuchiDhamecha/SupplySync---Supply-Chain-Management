import { DistributorsDataTypes } from "../../../screens/manufacturerScreen/Distributors/Distributors.types";

 export interface DistRowProps {
    distributor: DistributorsDataTypes;
    onUpdate: (product: DistributorsDataTypes) => void;
    onDelete: (productId: string) => void;
 } 
 export interface DistributorFormInputs {
    user_name: string;
    email: number;
    mobile_number: string;
    address: string;
    points:number
 }
