"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const customerSchema = new base_schema_1.BaseSchema({
    customer_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile_number: { type: Number, required: true },
    address: { type: String, required: true }
});
exports.CustomerModel = (0, mongoose_1.model)('Customer', customerSchema);
