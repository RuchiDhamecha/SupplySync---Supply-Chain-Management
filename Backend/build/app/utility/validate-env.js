"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const zod_1 = require("zod");
const dotenv_1 = require("dotenv");
const validator = zod_1.z.object({
    PORT: zod_1.z.coerce.number(),
    JWT_TOKEN: zod_1.z.string(),
    JWT_REFRESH_TOKEN: zod_1.z.string(),
    MONGO_URI: zod_1.z.string()
});
const validateEnv = () => {
    try {
        (0, dotenv_1.config)();
        validator.passthrough().parse(process.env);
    }
    catch (e) {
        throw ({ message: "Env is not configured correctly!", error: e });
    }
    console.log("Env Validated");
};
exports.validateEnv = validateEnv;
