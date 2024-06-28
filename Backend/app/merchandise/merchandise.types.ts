export interface UserResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

import { z } from "zod";

export const RewardSchema = z.object({
  reward_name: z.string(),
  reward_description: z.string(),
  reward_image: z.string(),
  points_required: z.number(),
});

export type RewardI = z.infer<typeof RewardSchema>;
