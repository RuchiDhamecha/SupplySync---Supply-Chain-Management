"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const zod_1 = require("zod");
exports.CustomerSchema = zod_1.z.object({
    customer_name: zod_1.z.string(),
    email: zod_1.z.string(),
    mobile_number: zod_1.z.number(),
    address: zod_1.z.string(),
});
