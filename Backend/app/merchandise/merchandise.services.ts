import merchRepo from './merchandise.repo';
import { merchandiseResponses } from './merchandise.responses';
import { RewardI } from './merchandise.types';

const createMerch = async (merch: RewardI) => {
  try{
    return await merchRepo.insertOne(merch);
  }catch(e){
    throw e;
  }
};

const getAllMerch = async (query: Partial<RewardI>) => await merchRepo.find(query)
  // const find = async (query: Partial<MerchandiseI>) => await userRepo.find(query)

const getMerchById = async (id: string) => {
  try {
    const merch = await merchRepo.findById(id);
    if (!merch) {
      throw merchandiseResponses.MERCHANDISE_ID_REQUIRED;
    }
    return merch;
  } catch (e) {
    throw e;
  }
};

const updateMerch = async (id: string, updateData: Partial<RewardI>) => {
  try {
    return await merchRepo.updateOne({ _id: id }, updateData);
  } catch (e) {
    throw e;
  }
};

const deleteMerch = async (id: string) => {
  try {
    return await merchRepo.deleteOne({ _id: id });
  } catch (e) {
    throw e;
  }
};

export default {
  createMerch,
  getAllMerch,
  getMerchById,
  updateMerch,
  deleteMerch,
};