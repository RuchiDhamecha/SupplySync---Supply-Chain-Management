"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const ProductSchema = new base_schema_1.BaseSchema({
    product_name: { type: String, required: true },
    product_description: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_image: { type: String, required: false },
    quantity: { type: Number, required: false },
});
exports.ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
