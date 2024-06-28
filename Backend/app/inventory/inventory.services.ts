import { InventoryModel, InventoryDocument } from './inventory.schema';

const getInventoryByDistributor = async (distributor_id: string) => {
  return InventoryModel.findOne({ distributor_id });
};

const updateInventory = async (distributor_id: string, product_name: string, quantity: number) => {
  return InventoryModel.findOneAndUpdate(
    { distributor_id, 'products.product_name': product_name },
    { $inc: { 'products.$.quantity': quantity } },
    { new: true }
  );
};

const decreaseInventory = async (distributor_id: string, product_name: string, quantity: number) => {
  try {
    // Find the inventory record for the distributor and product
    let inventory = await InventoryModel.findOne({
      distributor_id,
    });

    // If inventory doesn't exist, create a new inventory record
    if (!inventory) {
      inventory = new InventoryModel({
        distributor_id,
        products: [],
      });
    }

    // Check if the product already exists in inventory
    let productIndex = inventory.products.findIndex(
      (product) => product.product_name === product_name
    );

    // If product does not exist, add it to the inventory
    if (productIndex === -1) {
      inventory.products.push({
        product_name,
        quantity: 0, // Initialize with 0 if adding for the first time
      });
      productIndex = inventory.products.length - 1; // Update product index
    }

    // Decrease the quantity of the product in inventory
    inventory.products[productIndex].quantity -= quantity;

    // Save the updated inventory document
    await inventory.save();

    return inventory; // Return the updated inventory document if needed
  } catch (error) {
    throw error; // Propagate the error to the caller
  }
};

export default {
  getInventoryByDistributor,
  updateInventory,
  decreaseInventory,
};
