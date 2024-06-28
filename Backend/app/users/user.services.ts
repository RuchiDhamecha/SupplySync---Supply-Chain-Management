// import userRepo from './user.repo';
// import { UserI } from './user.types';

// const createUser = async (userData: UserI) => {
//   return userRepo.insertOne(userData);
// };

// const createUsers = async (userDataArray: UserI[]) => {
//   return userRepo.insertMany(userDataArray);
// };

// const getUserById = async (id: string) => {
//   return userRepo.findById(id);
// };

// const getUserByEmail = async (email: string) => {
//   return userRepo.findByEmail(email);
// };

// const updateUser = async (id: string, updateData: Partial<UserI>) => {
//   return userRepo.updateOne({ _id: id }, updateData);
// };

// const deleteUser = async (id: string) => {
//   return userRepo.deleteOne({ _id: id });
// };

// const getUsers = async (query: Partial<UserI>) => {
//   return userRepo.find(query);
// };

// export default {
//   createUser,
//   createUsers,
//   getUserById,
//   getUserByEmail,
//   updateUser,
//   deleteUser,
//   getUsers,
// };



import userRepo from './user.repo';
import { UserI } from './user.types';

const createUser = async (userData: UserI) => {
  return userRepo.insertOne(userData);
};

const createUsers = async (userDataArray: UserI[]) => {
  return userRepo.insertMany(userDataArray);
};

const getUserById = async (id: string) => {
  return userRepo.findById(id);
};

const getUserByEmail = async (email: string) => {
  return userRepo.findByEmail(email);
};

const updateUser = async (id: string, updateData: Partial<UserI>) => {
  return userRepo.updateOne({ _id: id }, updateData);
};

const deleteUser = async (id: string) => {
  return userRepo.deleteOne({ _id: id });
};

const getUsers = async (query: Partial<UserI>) => {
  return userRepo.find(query);
};

const getDistributors = async (filter: any) => {
  try {
    return await userRepo.find(filter);
  } catch (e) {
    throw e;
  }
};

const updateDistributor = async (id: string, updateData: Partial<UserI>) => {
  try {
    return await userRepo.updateOne({ _id: id }, updateData);
  } catch (e) {
    throw e;
  }
};

const deleteDistributor = async (id: string) => {
  try {
    return await userRepo.deleteOne({ _id: id });
  } catch (e) {
    throw e;
  }
};

export default {
  createUser,
  createUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
  getUsers,
  getDistributors,
  updateDistributor,
  deleteDistributor
};