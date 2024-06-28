"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const zod_1 = require("zod");
const ProductSchema = zod_1.z.object({
    // product_id: z.string(),
    product_name: zod_1.z.string(),
    product_price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.OrderSchema = zod_1.z.object({
    order_date: zod_1.z.date(),
    order_total_price: zod_1.z.number(),
    order_status: zod_1.z.enum(['pending', 'accepted', 'rejected']),
    user_id: zod_1.z.string(),
    onModel: zod_1.z.enum(['User', 'Customer']),
    products: zod_1.z.array(ProductSchema),
    customer_name: zod_1.z.string().optional(),
    distributor_name: zod_1.z.string().optional()
});
