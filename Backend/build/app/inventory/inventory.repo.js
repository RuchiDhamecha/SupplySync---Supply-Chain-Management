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
    return inventory_schema_1.InventoryModel.find({ distributor_id });
});
const updateInventory = (distributor_id, product_name, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return inventory_schema_1.InventoryModel.findOneAndUpdate({ distributor_id, product_name }, { $inc: { quantity: quantity } }, { new: true, upsert: true });
});
const decreaseInventory = (distributor_id, product_name, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return inventory_schema_1.InventoryModel.findOneAndUpdate({ distributor_id, product_name }, { $inc: { quantity: -quantity } }, { new: true });
});
exports.default = {
    getInventoryByDistributor,
    updateInventory,
    decreaseInventory,
};
