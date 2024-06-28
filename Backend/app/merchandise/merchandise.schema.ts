import { Schema, Document, Model, model } from 'mongoose';
import { BaseSchema } from '../utility/base-schema';

interface RewardI {
  reward_name: string;
  reward_description: string;
  reward_image: string;
  points_required: number;
}

interface RewardDocument extends Document, RewardI {}

const rewardSchema: Schema<RewardDocument> = new BaseSchema({
  reward_name: { type: String, required: true },
  reward_description: { type: String, required: true },
  reward_image: { type: String, required: true },
  points_required: { type: Number, required: true },
});

export const RewardModel: Model<RewardDocument> = model<RewardDocument>('Reward', rewardSchema);
export { RewardI, RewardDocument };
