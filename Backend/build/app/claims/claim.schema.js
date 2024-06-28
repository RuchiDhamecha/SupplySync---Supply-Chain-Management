"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimModel = void 0;
// claim.schema.ts
const mongoose_1 = require("mongoose");
const claimSchema = new mongoose_1.Schema({
    reward_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Reward', required: true },
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], required: true },
    points: { type: Number, required: true },
});
exports.ClaimModel = (0, mongoose_1.model)('Claim', claimSchema);
