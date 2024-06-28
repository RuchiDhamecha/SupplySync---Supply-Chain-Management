import { z } from "zod";

export interface UserResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

const ProductSchema = z.object({
  // product_id: z.string(),
  product_name: z.string(),
  product_price: z.number(),
  quantity: z.number(),
});

export const OrderSchema = z.object({
  order_date: z.date(),
  order_total_price: z.number(),
  order_status: z.enum(['pending', 'accepted', 'rejected']),
  user_id: z.string(),
  onModel: z.enum(['User', 'Customer']),
  products: z.array(ProductSchema),
  customer_name: z.string().optional(),
  distributor_name: z.string().optional()
});

export type OrderI = z.infer<typeof OrderSchema>;