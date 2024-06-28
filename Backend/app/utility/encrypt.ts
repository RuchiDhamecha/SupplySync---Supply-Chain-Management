import { genSalt, hash } from "bcrypt"

export const encrypt = async (data: string) => {
    const salt = await genSalt(20);
    const encryptedData = await hash(data, salt)
    return encryptedData;
}