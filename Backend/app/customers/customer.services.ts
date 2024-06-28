import { authResponses } from "../auth/auth.responses";
import customerRepo from "./customer.repo";
import { customerResponses } from "./customer.responses";
import { CustomerI } from "./customer.types";

const createCustomer = async (customer: CustomerI) => {
  try {
    const existingUser = await getUserByEmail(customer.email);
    if (existingUser) {
      throw authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
    }
    return await customerRepo.insertOne(customer);
  } catch (e) {
    throw e;
  }
};

const getAllCustomers = async (query: Partial<CustomerI>) =>
  await customerRepo.find(query);
// const find = async (query: Partial<MerchandiseI>) => await userRepo.find(query)

const getCustomerById = async (id: string) => {
  try {
    const customer = await customerRepo.findById(id);
    if (!customer) {
      throw customerResponses.CUSTOMER_ID_REQUIRED;
    }
    return customer;
  } catch (e) {
    throw e;
  }
};

const updateCustomer = async (id: string, updateData: Partial<CustomerI>) => {
  try {
    return await customerRepo.updateOne({ _id: id }, updateData);
  } catch (e) {
    throw e;
  }
};

const deleteCustomer = async (id: string) => {
  try {
    return await customerRepo.deleteOne({ _id: id });
  } catch (e) {
    throw e;
  }
};

const getUserByEmail = async (email: string) => {
  return customerRepo.findByEmail(email);
};

export default {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getUserByEmail
};
