import productRepo from './product.repo';
import { productResponses } from './product.responses';
import { ProductI } from './product.types';

const createProduct = async (product: ProductI) => {
  try{
    return await productRepo.insertOne(product);
  }catch(e){
    throw e;
  }
};

const getProducts = async (query: Partial<ProductI>) => await productRepo.find(query)
  // const find = async (query: Partial<ProductI>) => await userRepo.find(query)

const getProductById = async (id: string) => {
  try {
    const product = await productRepo.findById(id);
    if (!product) {
      throw productResponses.PRODUCT_ID_REQUIRED;
    }
    return product;
  } catch (e) {
    throw e;
  }
};

const getProductByName = async (name: string) => {
  try {
    if (!name) {
      throw productResponses.PRODUCT_NAME_REQUIRED;
    }
    return await productRepo.getProductByName(name);
  } catch (e) {
    throw e;
  }
};

const updateProduct = async (id: string, updateData: Partial<ProductI>) => {
  try {
    return await productRepo.updateOne({ _id: id }, updateData);
  } catch (e) {
    throw e;
  }
};

const deleteProduct = async (id: string) => {
  try {
    return await productRepo.deleteOne({ _id: id });
  } catch (e) {
    throw e;
  }
};

export default {
  createProduct,
  getProducts,
  getProductById,
  getProductByName,
  updateProduct,
  deleteProduct,
};