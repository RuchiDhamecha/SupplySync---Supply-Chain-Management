import { ProductDocument, ProductModel } from './product.schema';
import { ProductI } from './product.types';

const insertOne = async (product: ProductI) => {
  const newProduct = new ProductModel(product);
  console.log(newProduct);
  return newProduct.save();
};

const find = async (query: Partial<ProductI>): Promise<ProductDocument[]> => {
  try {
    const getAllProducts = await ProductModel.find(query)
    console.log(getAllProducts);
    return getAllProducts;
  } catch (error) {
    throw error;
  }
};

// const find = async (query: any) => {
//   return ProductModel.find(query);
// };

const findById = async (id: string): Promise<ProductDocument | null> => {
  try {
    const getProdById = await ProductModel.findById(id);
    console.log(getProdById);
    return getProdById
  } catch (error) {
    throw error;
  }
};

const getProductByName = async (name: string) => {

  return ProductModel.findOne({ product_name: name });
};

const updateOne = async (query: any, update: any) => {
  const updateProduct = ProductModel.updateOne(query, update)
  console.log(updateProduct);
  return updateProduct;
};

const deleteOne = async (query: any) => {
  const deleteProduct = ProductModel.deleteOne(query)
  console.log(deleteProduct);
  return deleteProduct;
};

export default {
  insertOne,
  find,
  findById,
  getProductByName,
  updateOne,
  deleteOne,
};
