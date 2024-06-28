"use strict";
// export interface UserResponses {
// 	[key: string]: {
// 		statusCode: number;
// 		message: string;
// 	};
// }
// import { z } from "zod";
// export const OrderSchema = z.object({
//   roleId: z.array(z.number()).nonempty(),
//   details: z.array(OrderSchema).nonempty(),
// });
// export type OrderI = z.infer<typeof OrderSchema>;
// export const UpdateUserSchema = OrderSchema.partial();
// export type UpdateUser = z.infer<typeof UpdateUserSchema>;
// import { Request } from 'express';
// import { UserDocument } from './user.schema'; 
// interface CustomRequest<T = any> extends Request {
//   user: UserDocument;
// }
// export default CustomRequest;
