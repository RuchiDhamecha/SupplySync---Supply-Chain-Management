"use strict";
// import { Schema, Document, Model, model } from 'mongoose';
// import { UserI } from "./user.types";
// import { BaseSchema } from '../utility/base-schema';
// import productServices from '../products/product.services';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
// export interface UserDocument extends Document, UserI {}
// const userSchema: Schema<UserDocument> = new BaseSchema({
//   roleId: [{
//     type: Number,
//     ref: 'Role',
//     required: true,
//   }],
//   details: [{
//     user_name: {
//       type: String,
//       required: true,
//       unique: false,
//     },
//     password: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     mobile_number: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     address: {
//       type: String,
//       required: false,
//     },
//     points: {
//       type: Number,
//       required: false,
//     },
//     purchase_history: [{
//       order_id: {
//         type: Schema.Types.ObjectId,
//         ref: 'Order',
//         required: false,
//       },
//       order_date: {
//         type: Schema.Types.ObjectId,
//         ref: 'Order',
//         required: false,
//       },
//       order_price: {
//         type: Schema.Types.ObjectId,
//         ref: 'Order',
//         required: false,
//       },
//       product_id: {
//         type: Schema.Types.ObjectId,
//         ref: 'Product',
//         required: false,
//       },
//       product_price: {
//         type: Schema.Types.ObjectId,
//         ref: 'Product',
//         required: false,
//       },
//       product_quantity: {
//         type: Schema.Types.ObjectId,
//         ref: 'Product',
//         required: false,
//       },
//     }],
//     redeem_requests: [{
//       item_merch_id: {
//         type: Schema.Types.ObjectId,
//         ref: 'Merchandise',
//         required: false,
//       },
//       redeem_request_status: {
//         type: String,
//         required: false,
//       },
//       redeemed_date: {
//         type: Date,
//         required: false,
//       },
//       merch_quantity: {
//         type: Number,
//         required: false,
//       }
//     }]
//   }]
// })
// export const UserModel: Model<UserDocument> = model<UserDocument>('User', userSchema);
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const userSchema = new base_schema_1.BaseSchema({
    roleId: [{
            type: Number,
            ref: 'Role',
            required: true,
        }],
    // role: {
    //   type: String,
    //   required: true,
    //   enum: ['manufacturer', 'distributor', 'customer'],
    // },
    details: [{
            user_name: {
                type: String,
                required: true,
                unique: false,
            },
            password: {
                type: String,
                required: true,
                unique: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            mobile_number: {
                type: Number,
                required: true,
                unique: true,
            },
            address: {
                type: String,
                required: false,
            },
            points: {
                type: Number,
                required: false,
            },
            purchase_history: [{
                    order_id: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Order',
                        required: false,
                    },
                    order_date: {
                        type: Date,
                        required: false,
                    },
                    order_price: {
                        type: Number,
                        required: false,
                    },
                    product_id: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Product',
                        required: false,
                    },
                    product_price: {
                        type: Number,
                        required: false,
                    },
                    product_quantity: {
                        type: Number,
                        required: false,
                    },
                }],
            redeem_requests: [{
                    item_merch_id: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Merchandise',
                        required: false,
                    },
                    redeem_request_status: {
                        type: String,
                        required: false,
                    },
                    redeemed_date: {
                        type: Date,
                        required: false,
                    },
                    merch_quantity: {
                        type: Number,
                        required: false,
                    },
                }]
        }]
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
