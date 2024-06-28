"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../utility/base-schema");
const rewardSchema = new base_schema_1.BaseSchema({
    reward_name: { type: String, required: true },
    reward_description: { type: String, required: true },
    reward_image: { type: String, required: true },
    points_required: { type: Number, required: true },
});
exports.RewardModel = (0, mongoose_1.model)('Reward', rewardSchema);
