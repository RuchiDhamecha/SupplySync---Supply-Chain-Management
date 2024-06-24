 export interface OrderNowModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { product_name: string; product_price: number; quantity: number }) => void;
    product: {
      product_name: string;
      product_price: number;
    };
 } 
