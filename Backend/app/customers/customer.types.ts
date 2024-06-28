export interface UserResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

import { z } from "zod";

export const CustomerSchema = z.object({
  customer_name: z.string(),
  email: z.string(),
  mobile_number: z.number(),
  address: z.string(),
});

export type CustomerI = z.infer<typeof CustomerSchema>;
