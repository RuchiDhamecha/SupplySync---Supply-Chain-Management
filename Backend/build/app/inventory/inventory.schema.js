"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    product_name: { type: String, required: true },
    quantity: { type: Number, required: true },
});
const inventorySchema = new mongoose_1.Schema({
    distributor_id: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [productSchema],
});
const InventoryModel = (0, mongoose_1.model)('Inventory', inventorySchema);
exports.InventoryModel = InventoryModel;
