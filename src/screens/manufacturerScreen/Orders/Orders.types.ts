export interface OrdersPropsM {
    _id: string;
    order_date: string;
    order_total_price: number;
    order_status: string;
    products: {
        product_name: string;
        product_price: number;
        quantity: number;
        _id: string;
    }[];
}
