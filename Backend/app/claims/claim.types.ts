import { z } from "zod";
import { Schema, Types } from "mongoose";

// Define Claim Schema with Zod
export const ClaimSchema = z.object({
  reward_id: z.instanceof(Schema.Types.ObjectId),
  user_id: z.instanceof(Schema.Types.ObjectId),
  status: z.enum(['pending', 'accepted', 'rejected']),
  points_used: z.number(),
});

// Define TypeScript types from the schema
export type ClaimI = z.infer<typeof ClaimSchema>;
