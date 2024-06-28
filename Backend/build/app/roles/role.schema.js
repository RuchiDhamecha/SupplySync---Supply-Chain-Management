"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const roleSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        enum: ['manufacturer', 'distributor', 'customer'],
        required: true,
    },
});
const Role = (0, mongoose_1.model)('Role', roleSchema);
exports.default = Role;
