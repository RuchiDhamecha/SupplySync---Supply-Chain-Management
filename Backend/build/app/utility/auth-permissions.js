"use strict";
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import userService from '../users/user.services';
// import { UserDocument } from '../users/user.schema';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = void 0;
// export interface CustomRequest extends Request {
//   user?: UserDocument;
// }
// export const verifyTokenAndRole = (allowedRoles: number[]) => {
//   return async (req: CustomRequest, res: Response, next: NextFunction) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
//     if (!token) {
//       return res.send({ message: 'Access denied. No token provided.' });
//     }
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_TOKEN || '') as any;
//       const user = await userService.getUserById(decoded.userId);
//       if (!user) {
//         return res.send({ message: 'Invalid token.' });
//       }
//       const userRoles = user.roleId;
//       const hasRole = allowedRoles.some(role => userRoles.includes(role));
//       if (!hasRole) {
//         return res.send({ message: 'Forbidden: You do not have the required role.' });
//       }
//       req.user = user;
//       next();
//     } catch (err) {
//       res.send({ message: 'Invalid token.' });
//     }
//   };
// };
// export const verifyManufacturerRole = verifyTokenAndRole([1]);
// export const verifyDistributorRole = verifyTokenAndRole([2]);
// export const verifyManufacturerOrDistributorRole = verifyTokenAndRole([1,2]);
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_services_1 = __importDefault(require("../users/user.services"));
const permit = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            return res.send({ message: 'Access denied. No token provided.' });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_TOKEN || '');
            const user = yield user_services_1.default.getUserById(decoded.userId);
            if (!user) {
                return res.send({ message: 'Invalid token.' });
            }
            const userRoles = user.roleId.map((role) => {
                switch (role) {
                    case 1: return 'manufacturer';
                    case 2: return 'distributor';
                    default: return null;
                }
            }).filter(role => role !== null);
            const hasRole = roles.some(role => userRoles.includes(role));
            if (!hasRole) {
                return res.status(403).send({ message: 'Forbidden: You do not have the required role.' });
            }
            req.user = user;
            req.payload = decoded; // Include payload in request for further use if needed
            next();
        }
        catch (err) {
            res.status(400).send({ message: 'Invalid token.' });
        }
    });
};
exports.permit = permit;
// // Specific role checks
// export const permitManufacturer = permit(['manufacturer']);
// export const permitDistributor = permit(['distributor']);
// export const permitManufacturerOrDistributor = permit(['manufacturer', 'distributor']);
