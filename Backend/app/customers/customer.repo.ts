import { CustomerDocument, CustomerModel } from "./customer.schema";
import { CustomerI } from "./customer.types";

const insertOne = async (customerData: CustomerI) => {
  const newCustomer = new CustomerModel(customerData);
  console.log(newCustomer);
  return newCustomer.save();
};

const findById = async (id: string): Promise<CustomerDocument | null> => {
  try {
    const getCustomerById = CustomerModel.findById(id);
    console.log(getCustomerById);
    return getCustomerById;
  } catch (e) {
    throw e;
  }
};

const find = async (query: Partial<CustomerI>): Promise<CustomerDocument[]> => {
  const getAllCustomers = CustomerModel.find(query);
  console.log(getAllCustomers);
  return getAllCustomers;
};

const updateOne = async (query: any, update: any) => {
  const updateCustomer = CustomerModel.updateOne(query, update);
  console.log(updateCustomer);
  return updateCustomer;
};

const deleteOne = async (query: any) => {
  const deleteCustomer = CustomerModel.deleteOne(query);
  console.log(deleteCustomer);
  return deleteCustomer;
};

const findByEmail = async (email: string) => {
  return CustomerModel.findOne({ 'email': email });
};

export default {
  insertOne,
  findById,
  find,
  updateOne,
  deleteOne,
  findByEmail
};
