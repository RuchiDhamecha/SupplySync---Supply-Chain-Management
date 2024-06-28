import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../routes/routes.types";
import authServices from "./auth.services";
import { ResponseHandler } from "../utility/response-handler";
import { LoginValidations, SignUpValidations } from "./auth.validations";
import { UserSchema } from "../users/user.types";
import userServices from "../users/user.services";
import { permit } from "../utility/auth-permissions";
// import { verifyManufacturerOrDistributorRole, verifyManufacturerRole } from "../utility/auth-permissions";



const router = Router();

// Register new user
router.post(
  "/register",
  permit(['manufacturer']),
  ...SignUpValidations,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = UserSchema.parse(req.body);
      const user = await authServices.register(userData);
      res.send(new ResponseHandler(user));
    } catch (e) {
      next(e);
    }
  }
);

// Register multiple users
router.post(
  "/register-many",
  permit(['manufacturer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersData = req.body.map((user: any) => UserSchema.parse(user));
      const users = await authServices.registerMany(usersData);
      res.send(new ResponseHandler(users));
    } catch (e) {
      next(e);
    }
  }
);

// User login
router.post(
  "/login",
  ...LoginValidations, 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await authServices.login(req.body);
      console.log("logged user: ", result);
      res.send(new ResponseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

//Get user by email
router.get("/user/email/:email", 
// verifyManufacturerRole,
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.getUserByEmail(req.params.email);
    res.send(new ResponseHandler(user));
  } catch (e) {
    next(e);
  }
});

// Get user by ID
router.get("/user/id/:id", 
// verifyManufacturerRole, 
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.send(new ResponseHandler(user));
  } catch (e) {
    next(e);
  }
});

// Get all users
router.get("/users", 
// verifyManufacturerRole,
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getUsers({});
    res.send(new ResponseHandler(users));
  } catch (e) {
    next(e);
  }
});

export default new Route("/auth", router);
