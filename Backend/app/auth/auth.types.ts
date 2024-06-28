import { z } from "zod";
import { UserSchema } from "../users/user.types";

const UserDetailSchema = UserSchema.shape.details.element;

export const Credentials = UserDetailSchema.pick({ 
  email: true, 
  password: true 
});

export interface Credential extends z.infer<typeof Credentials> { }

export const signUpCredentials = z.object({
  roleId: UserSchema.shape.roleId,
  details: z.array(UserDetailSchema.pick({
    user_name: true,
    email: true,
    password: true,
    mobile_number: true,
    address: true,
    points: true,
  })).nonempty(),
});

export interface AuthResponses extends z.infer<typeof UserSchema> { }
