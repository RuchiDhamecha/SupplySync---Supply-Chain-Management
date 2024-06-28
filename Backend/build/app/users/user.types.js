"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
const PurchaseHistorySchema = zod_1.z.object({
    order_id: zod_1.z.string().optional(),
    order_date: zod_1.z.string().optional(),
    order_price: zod_1.z.string().optional(),
    product_id: zod_1.z.string().optional(),
    product_price: zod_1.z.string().optional(),
    product_quantity: zod_1.z.string().optional(),
});
const RedeemRequestSchema = zod_1.z.object({
    item_merch_id: zod_1.z.string().optional(),
    redeem_request_status: zod_1.z.string().optional(),
    redeemed_date: zod_1.z.string().optional(),
    merch_quantity: zod_1.z.number().optional(),
});
const UserDetailSchema = zod_1.z.object({
    user_name: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string().email(),
    mobile_number: zod_1.z.number(),
    address: zod_1.z.string().optional(),
    points: zod_1.z.number().optional(),
    purchase_history: zod_1.z.array(PurchaseHistorySchema).optional(),
    redeem_requests: zod_1.z.array(RedeemRequestSchema).optional(),
});
exports.UserSchema = zod_1.z.object({
    roleId: zod_1.z.array(zod_1.z.number()),
    details: zod_1.z.array(UserDetailSchema).nonempty(),
});
exports.UpdateUserSchema = exports.UserSchema.partial();
// export type UserResponses = z.infer<typeof UserSchema>;
