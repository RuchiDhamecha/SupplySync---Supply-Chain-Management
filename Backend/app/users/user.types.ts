export interface UserResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

import { z } from "zod";

const PurchaseHistorySchema = z.object({
  order_id: z.string().optional(),
  order_date: z.string().optional(),
  order_price: z.string().optional(),
  product_id: z.string().optional(),
  product_price: z.string().optional(),
  product_quantity: z.string().optional(),
});

const RedeemRequestSchema = z.object({
  item_merch_id: z.string().optional(),
  redeem_request_status: z.string().optional(),
  redeemed_date: z.string().optional(),
  merch_quantity: z.number().optional(),
});

const UserDetailSchema = z.object({
  user_name: z.string(),
  password: z.string(),
  email: z.string().email(),
  mobile_number: z.number(),
  address: z.string().optional(),
  points: z.number().optional(),
  purchase_history: z.array(PurchaseHistorySchema).optional(),
  redeem_requests: z.array(RedeemRequestSchema).optional(),
});

export const UserSchema = z.object({
  roleId: z.array(z.number()),
  details: z.array(UserDetailSchema).nonempty(),
});

export type UserI = z.infer<typeof UserSchema>;
export const UpdateUserSchema = UserSchema.partial();

export type UpdateUser = z.infer<typeof UpdateUserSchema>;

import { Request } from 'express';
import { UserDocument } from './user.schema'; 
interface CustomRequest<T = any> extends Request {
  user: UserDocument;
}

export default CustomRequest;

// export type UserResponses = z.infer<typeof UserSchema>;