"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const orderSchema = new base_schema_1.BaseSchema({
    order_date: {
        type: Date,
        required: false,
    },
    order_total_price: {
        type: Number,
        required: false,
    },
    order_status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected'],
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        refPath: 'onModel',
    },
    onModel: {
        type: String,
        required: true,
        enum: ['User', 'Customer'],
    },
    customer_name: {
        type: String,
        required: false
    },
    distributor_name: {
        type: String,
        required: false
    },
    products: [{
            // product_id: {
            //   type: Schema.Types.ObjectId,
            //   required: true,
            //   ref: 'Product',
            // },
            product_name: {
                type: mongoose_1.Schema.Types.String,
                required: true,
                ref: 'Product'
            },
            product_price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        }],
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
