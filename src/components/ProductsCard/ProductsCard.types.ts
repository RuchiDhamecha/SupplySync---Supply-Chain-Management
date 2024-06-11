import { productsDataTypes } from '../../screens/manufacturerScreen/Products/Products.types';



export interface ProductFormInputs {
   product_name: string;
   product_price: number;
   product_description: string;
   product_image: string;
}


export interface ProductsCardProps {
  product: productsDataTypes;
  onUpdate: (product: productsDataTypes) => void;
  onDelete: (productId: string) => void;
}
