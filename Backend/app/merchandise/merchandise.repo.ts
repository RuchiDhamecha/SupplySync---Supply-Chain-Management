import { RewardDocument, RewardModel } from './merchandise.schema';
import { RewardI } from './merchandise.types';

const insertOne = async (merchData: RewardI) => {
  const newMerch = new RewardModel(merchData);
  console.log(newMerch);
  return newMerch.save();
};

const findById = async (id: string): Promise<RewardDocument | null> => {
  try {
    const getMerchById = RewardModel.findById(id);
    console.log(getMerchById);
    return getMerchById;
  } catch (e) {
    throw e
  }
};

const find = async (query: Partial<RewardI>): Promise<RewardDocument[]> => {
  const getAllMerch = RewardModel.find(query);
  console.log(getAllMerch);
  return getAllMerch
};

const updateOne = async (query: any, update: any) => {
  const merchandise = RewardModel.updateOne(query, update)
  console.log(merchandise);
  return merchandise;
};

const deleteOne = async (query: any) => {
  const deleteMerch = RewardModel.deleteOne(query)
  console.log(deleteMerch);
  return deleteMerch;
};

export default {
  insertOne,
  findById,
  find,
  updateOne,
  deleteOne,
};
