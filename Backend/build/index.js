"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_env_1 = require("./app/utility/validate-env");
console.log("index");
(0, validate_env_1.validateEnv)();
console.log("validated env");
const app_1 = require("./app/app");
(0, app_1.startServer)();
console.log("started server");
