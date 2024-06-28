import { validateEnv } from "./app/utility/validate-env";
console.log("index");
validateEnv();
console.log("validated env");

import { startServer } from "./app/app";
startServer();
console.log("started server");