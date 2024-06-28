"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
// Define Claim Schema with Zod
exports.ClaimSchema = zod_1.z.object({
    reward_id: zod_1.z.instanceof(mongoose_1.Schema.Types.ObjectId),
    user_id: zod_1.z.instanceof(mongoose_1.Schema.Types.ObjectId),
    status: zod_1.z.enum(['pending', 'accepted', 'rejected']),
    points_used: zod_1.z.number(),
});
