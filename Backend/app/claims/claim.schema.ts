// claim.schema.ts
import { Schema, Document, Model, model } from 'mongoose';

interface ClaimDocument extends Document {
  reward_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  status: 'pending' | 'accepted' | 'rejected';
  points: number;
}

const claimSchema: Schema<ClaimDocument> = new Schema({
  reward_id: { type: Schema.Types.ObjectId, ref: 'Reward', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], required: true },
  points: { type: Number, required: true },
});

export const ClaimModel: Model<ClaimDocument> = model<ClaimDocument>('Claim', claimSchema);
