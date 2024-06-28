import { Request, Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { authResponses } from '../auth/auth.responses';
import { ExcludedRoutes } from '../routes/routes.types';
import Role, { RoleDocument } from '../roles/role.schema';
import CustomRequest from '../auth/auth.services';

export const validateToken =
  (excludedRoutes: ExcludedRoutes) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        excludedRoutes.find(
          (route) => route.path(req.path) && route.method === req.method
        )
      ) {
        return next();
      }
      const authHeader = req.headers.authorization;
      if (!authHeader) throw authResponses.UNAUTHORISED_ACCESS_DENIED;

      const token = authHeader.split(' ')[1];
      if (!token) throw authResponses.UNAUTHORISED_ACCESS_DENIED;

      const { JWT_TOKEN } = process.env;
      if (!JWT_TOKEN) throw new Error("JWT_ACCESS_TOKEN not set");

      const payload = verify(token, JWT_TOKEN) as JwtPayload;
      req.payload = payload;

      next();
    } catch (e) {
      next({ statusCode: 403, message: authResponses.UNAUTHORISED_ACCESS_DENIED });
    }
  };

//   type Roles = "manufacturer" | "distributor" | "customer";
//   type role = Roles[];
// export const permit = (roles: role[]) => (req: Request, res: Response, next: NextFunction) => {
//   if (!roles.includes(req.payload.roleId)) {
//     throw authResponses.UNAUTHORISED_ACCESS_DENIED;
//   }
//   next();
// };

// import { UserDocument } from '../users/user.schema';
// import jwt from 'jsonwebtoken';
// import userService from "../users/user.services";

// export interface CustomRequest<T = any> extends Request {
//   user?: UserDocument;
//   payload: {
//     userId: string;
//     roleId: number[]; 
//   };
// }

// export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).send({ message: 'Unauthorized' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN || '') as { userId: string, roleId: number[] };
//     req.user = { userId: decoded.userId, roleId: decoded.roleId };
//     next();
//   } catch (error) {
//     console.error('Token verification error:', error);
//     return res.status(403).send({ message: 'Forbidden' });
//   }
// };

// export const verifyUserRole = async (userId: string): Promise<number[]> => {
//   try {
//     const user = await userService.getUserById(userId);
//     if (!user) throw new Error('User not found');
//     return user.roleId;
//   } catch (error) {
//     throw error;
//   }
// };
