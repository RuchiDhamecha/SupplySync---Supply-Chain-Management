import { z } from "zod";
import { config } from "dotenv";

const validator = z.object({
    PORT: z.coerce.number(),
    JWT_TOKEN: z.string(),
    JWT_REFRESH_TOKEN: z.string(),
    MONGO_URI: z.string()
})

type ENV = z.infer<typeof validator>

export const validateEnv = () => {
    try {
        config();
        validator.passthrough().parse(process.env);
    } catch (e) {
        throw ({ message: "Env is not configured correctly!", error: e });
    }
    console.log("Env Validated");
};

declare global{
  namespace Express{
    export interface Request{
      payload?:any,
    }
  }
  namespace NodeJS{
    interface ProcessEnv extends ENV{}
  }
}