"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = require("zod");
exports.ProductSchema = zod_1.z.object({
    product_name: zod_1.z.string(),
    product_description: zod_1.z.string(),
    product_price: zod_1.z.number(),
    product_image: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    // roleId: z.number()
});
// export interface Product {
//   product_name: string;
//   product_description: string;
//   product_price: number;
//   product_image?: string;
// }
