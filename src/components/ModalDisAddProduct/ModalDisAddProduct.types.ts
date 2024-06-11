import { productsDataTypes } from "../../screens/manufacturerScreen/Products/Products.types";

 export interface ModalDisAddProductProps {
    isOpen: boolean;
    onClose: () => void;
    onAddProduct: (product: productsDataTypes) => void;
 } 
