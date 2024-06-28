import { z } from "zod";

export interface ProductResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

export const ProductSchema = z.object({
  product_name: z.string(),
  product_description: z.string(),
  product_price: z.number(),
  product_image:z.string().optional(),
  quantity:z.number().optional(),
  // roleId: z.number()
});

export type ProductI = z.infer<typeof ProductSchema>;
// export interface Product {
//   product_name: string;
//   product_description: string;
//   product_price: number;
//   product_image?: string;
// }