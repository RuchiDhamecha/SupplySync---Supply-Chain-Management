import express, { Request, Response, NextFunction } from 'express';
import customerServices from './customer.services';
import { ResponseHandler } from '../utility/response-handler';
import { Route } from '../routes/routes.types';
import {CustomRequest, permit } from '../utility/auth-permissions';
import { CustomerModel } from './customer.schema';
import authServices from '../auth/auth.services';
import { CustomerSchema } from './customer.types';

const router = express.Router();

router.post(
  '/addcustomer',
  permit(['distributor']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Created Customer Is: ");
      const customer = await customerServices.createCustomer(req.body);
      res.send(new ResponseHandler(customer));
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  '/',
  permit(['manufacturer', 'distributor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Customers Are: ");
      const customers = await customerServices.getAllCustomers({});
      res.send(new ResponseHandler(customers));
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  '/:id',
  permit(['manufacturer', 'distributor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Customer Is: ");
      const customer = await customerServices.getCustomerById(req.params.id);
      res.send(new ResponseHandler(customer));
    } catch (e) {
      next(e);
    }
  }
);

router.put(
  '/:id',
  permit(['distributor']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Updated Customer Is: ");
      const customer = await customerServices.updateCustomer(req.params.id, req.body);
      res.send(new ResponseHandler(customer));
    } catch (e) {
      next(e);
    }
  }
);

router.delete(
  '/:id',
  permit(['distributor']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Deleted Customer Is: ");
      const customer = await customerServices.deleteCustomer(req.params.id);
      res.send(new ResponseHandler(customer));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route('/customer', router);
