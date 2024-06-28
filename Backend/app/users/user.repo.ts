import { UserModel } from './user.schema';
import { UserI } from './user.types';

const insertOne = async (userData: UserI) => {
  const newUser = new UserModel(userData);
  return newUser.save();
};

const insertMany = async (userDataArray: UserI[]) => {
  return UserModel.insertMany(userDataArray);
};

const findById = async (id: string) => {
  return UserModel.findById(id);
};

const findByEmail = async (email: string) => {
  return UserModel.findOne({ 'details.email': email });
};

const find = async (query: any) => {
  return UserModel.find(query);
};

const updateOne = async (query: any, update: any) => {
  const updateDistributor = UserModel.updateOne(query, update)
  console.log(updateDistributor);
  return updateDistributor;
};

const deleteOne = async (query: any) => {
  const deleteDistributor = UserModel.deleteOne(query)
  console.log(deleteDistributor);
  return deleteDistributor;
};

export default {
  insertOne,
  insertMany,
  findById,
  findByEmail,
  find,
  updateOne,
  deleteOne,
};
