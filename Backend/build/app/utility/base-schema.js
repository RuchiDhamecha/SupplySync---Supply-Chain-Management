"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = void 0;
const mongoose_1 = require("mongoose");
class BaseSchema extends mongoose_1.Schema {
    constructor(schema) {
        super(Object.assign(Object.assign({}, schema), { isDeleted: {
                type: Boolean,
                require: true,
                default: false
            }, createdAt: {
                type: Date,
                default: Date.now()
            }, updatedAt: {
                type: Date,
                default: Date.now()
            }, deletedAt: {
                type: Date,
                default: Date.now()
            } }), { timestamps: true });
    }
}
exports.BaseSchema = BaseSchema;
