import express, { Request, Response, NextFunction } from 'express';
import merchandiseServices from './merchandise.services';
import { ResponseHandler } from '../utility/response-handler';
import { Route } from '../routes/routes.types';
// import { verifyTokenAndRole, CustomRequest, verifyManufacturerRole, verifyManufacturerOrDistributorRole} from '../utility/auth-permissions';
import {CustomRequest, permit } from '../utility/auth-permissions';

const router = express.Router();

router.post(
  '/addmerch',
  permit(['manufacturer']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Created Merchandise Is: ");
      const merchandise = await merchandiseServices.createMerch(req.body);
      res.send(new ResponseHandler(merchandise));
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
      console.log("Merchandises Are: ");
      const merchandises = await merchandiseServices.getAllMerch({});
      res.send(new ResponseHandler(merchandises));
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
      console.log("Merchandise Is: ");
      const merchandise = await merchandiseServices.getMerchById(req.params.id);
      res.send(new ResponseHandler(merchandise));
    } catch (e) {
      next(e);
    }
  }
);

router.put(
  '/:id',
  permit(['manufacturer']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Updated Merchandise Is: ");
      const merchandise = await merchandiseServices.updateMerch(req.params.id, req.body);
      res.send(new ResponseHandler(merchandise));
    } catch (e) {
      next(e);
    }
  }
);

router.delete(
  '/:id',
  permit(['manufacturer']),
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Deleted Merchandise Is: ");
      const merchandise = await merchandiseServices.deleteMerch(req.params.id);
      res.send(new ResponseHandler(merchandise));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route('/merchandise', router);
