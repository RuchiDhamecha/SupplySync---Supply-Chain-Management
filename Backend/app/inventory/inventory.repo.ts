import { InventoryModel, InventoryDocument } from './inventory.schema';

const getInventoryByDistributor = async (distributor_id: string) => {
  return InventoryModel.find({ distributor_id });
};

const updateInventory = async (distributor_id: string, product_name: string, quantity: number) => {
  return InventoryModel.findOneAndUpdate(
    { distributor_id, product_name },
    { $inc: { quantity: quantity } },
    { new: true, upsert: true }
  );
};

const decreaseInventory = async (distributor_id: string, product_name: string, quantity: number) => {
  return InventoryModel.findOneAndUpdate(
    { distributor_id, product_name },
    { $inc: { quantity: -quantity } },
    { new: true }
  );
};

export default {
  getInventoryByDistributor,
  updateInventory,
  decreaseInventory,
};
