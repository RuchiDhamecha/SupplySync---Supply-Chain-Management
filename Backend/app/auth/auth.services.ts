import jwt from 'jsonwebtoken';
import userService from "../users/user.services";
import { authResponses } from "./auth.responses";
import { compare } from "bcrypt";
import { encrypt } from "../utility/encrypt";
import { UserI } from "../users/user.types";

const login = async (credentials: { email: string; password: string }) => {
  try {
    const user = await userService.getUserByEmail(credentials.email);

    if (!user) throw authResponses.USER_NOT_FOUND;

    const userDetail = user.details.find(detail => detail.email === credentials.email);

    if (!userDetail) throw authResponses.USER_NOT_FOUND;

    const didMatch = await compare(credentials.password, userDetail.password);

    if (!didMatch) throw authResponses.WRONG_PASSWORD;

    const { password, ...restOfTheUserDetail } = userDetail;
    const { JWT_TOKEN } = process.env;

    const token = jwt.sign(
      { userId: user._id, roleId: user.roleId },
      JWT_TOKEN || ''
    );

    // return { token, roleId: user.roleId, ...restOfTheUserDetail }
    return { token, user: { ...user.toObject(), details: [restOfTheUserDetail] }, role: user.roleId };
  }catch (e) {
    throw e;
  }
};

const register = async (userData: UserI) => {
  try {
    const existingUser = await userService.getUserByEmail(userData.details[0].email);
    if (existingUser) {
      throw authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
    }

    userData.details[0].password = await encrypt(userData.details[0].password);
    const newUser = await userService.createUser(userData);
    return newUser;
  } catch (e) {
    throw e;
  }
};

const registerMany = async (userDataArray: UserI[]) => {
  try {
    const existingUsers = await Promise.all(
      userDataArray.map(userData => userService.getUserByEmail(userData.details[0].email))
    );

    if (existingUsers.some(user => user)) {
      throw authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
    }

    const encryptedUsers = await Promise.all(
      userDataArray.map(async userData => {
        userData.details[0].password = await encrypt(userData.details[0].password);
        return userData;
      })
    );

    const newUsers = await userService.createUsers(encryptedUsers);
    return newUsers;
  } catch (e) {
    throw e;
  }
}

const find = async (credentials: Partial<UserI>) => {
  const user = await userService.getUserByEmail(credentials.details?.[0].email || '');
  if (!user) throw authResponses.USER_NOT_FOUND;

  const userDetail = user.details.find(detail => detail.email === credentials.details?.[0].email);

  if (!userDetail) throw authResponses.USER_NOT_FOUND;

  const { password, ...restOfTheUserDetail } = userDetail;
  return { ...user.toObject(), details: [restOfTheUserDetail] };
};

const findAll = async (query: Partial<UserI>) => {
  const users = await userService.getUsers(query);
  return users;
};

export default {
  login,
  register,
  registerMany,
  find,
  findAll,
};