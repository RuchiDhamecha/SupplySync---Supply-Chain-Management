"use strict";
// import { RewardModel } from '../merchandise/merchandise.schema';
// import { ClaimModel, ClaimDocument } from './claim.schema';
// import { ClaimI } from './claim.types';
// import { Types } from 'mongoose';
// const insertClaim = async (claimData: ClaimI): Promise<ClaimDocument> => {
//   const newClaim = new ClaimModel(claimData);
//   return newClaim.save();
// };
// const findClaimById = async (id: Types.ObjectId): Promise<ClaimDocument | null> => {
//   return ClaimModel.findById(id).exec();
// };
// const getAllClaims = async (): Promise<ClaimDocument[]> => {
//   return ClaimModel.find().exec();
// };
// const updateClaimStatus = async (id: Types.ObjectId, status: 'accepted' | 'rejected'): Promise<ClaimDocument | null> => {
//   return ClaimModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
// };
// const getAcceptedClaimsByUserId = async (user_id: Types.ObjectId): Promise<ClaimDocument[]> => {
//   return ClaimModel.find({ user_id, status: 'accepted' }).exec();
// };
// const getClaimByRewardName = async (rewardName: string, userId: Types.ObjectId): Promise<ClaimDocument | null> => {
//   return ClaimModel.findOne({ user_id: userId, reward_id: (await RewardModel.findOne({ reward_name: rewardName }))._id }).exec();
// };
// export default {
//   insertClaim,
//   findClaimById,
//   getAllClaims,
//   updateClaimStatus,
//   getAcceptedClaimsByUserId,
//   getClaimByRewardName,
// };
