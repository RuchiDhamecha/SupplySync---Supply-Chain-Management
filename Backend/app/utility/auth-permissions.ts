// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import userService from '../users/user.services';
// import { UserDocument } from '../users/user.schema';

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


import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import userService from '../users/user.services';
import { UserDocument } from '../users/user.schema';

type Role = 'manufacturer' | 'distributor';
type Roles = Role[];

export interface CustomRequest extends Request {
  user?: UserDocument;
  payload?: any;
}

export const permit = (roles: Roles) => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.send({ message: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN || '') as any;
      const user = await userService.getUserById(decoded.userId);

      if (!user) {
        return res.send({ message: 'Invalid token.' });
      }

      const userRoles = user.roleId.map((role: number) => {
        switch (role) {
          case 1: return 'manufacturer';
          case 2: return 'distributor';

          default: return null;
        }
      }).filter(role => role !== null);

      const hasRole = roles.some(role => userRoles.includes(role as Role));

      if (!hasRole) {
        return res.status(403).send({ message: 'Forbidden: You do not have the required role.' });
      }

      req.user = user;
      req.payload = decoded; // Include payload in request for further use if needed
      next();
    } catch (err) {
      res.status(400).send({ message: 'Invalid token.' });
    }
  };
};

// // Specific role checks
// export const permitManufacturer = permit(['manufacturer']);
// export const permitDistributor = permit(['distributor']);
// export const permitManufacturerOrDistributor = permit(['manufacturer', 'distributor']);