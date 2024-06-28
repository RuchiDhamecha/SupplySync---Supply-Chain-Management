"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_schema_1 = require("./inventory.schema");
const getInventoryByDistributor = (distributor_id) => __awaiter(void 0, void 0, void 0, function* () {
    return inventory_schema_1.InventoryModel.findOne({ distributor_id });
});
const updateInventory = (distributor_id, product_name, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return inventory_schema_1.InventoryModel.findOneAndUpdate({ distributor_id, 'products.product_name': product_name }, { $inc: { 'products.$.quantity': quantity } }, { new: true });
});
const decreaseInventory = (distributor_id, product_name, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the inventory record for the distributor and product
        let inventory = yield inventory_schema_1.InventoryModel.findOne({
            distributor_id,
        });
        // If inventory doesn't exist, create a new inventory record
        if (!inventory) {
            inventory = new inventory_schema_1.InventoryModel({
                distributor_id,
                products: [],
            });
        }
        // Check if the product already exists in inventory
        let productIndex = inventory.products.findIndex((product) => product.product_name === product_name);
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
        yield inventory.save();
        return inventory; // Return the updated inventory document if needed
    }
    catch (error) {
        throw error; // Propagate the error to the caller
    }
});
exports.default = {
    getInventoryByDistributor,
    updateInventory,
    decreaseInventory,
};
