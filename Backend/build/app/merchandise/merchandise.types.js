"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardSchema = void 0;
const zod_1 = require("zod");
exports.RewardSchema = zod_1.z.object({
    reward_name: zod_1.z.string(),
    reward_description: zod_1.z.string(),
    reward_image: zod_1.z.string(),
    points_required: zod_1.z.number(),
});
