import { Router, Request, Response, NextFunction } from 'express';
import orderServices from './order.services';
import { ResponseHandler } from '../utility/response-handler';
import { permit } from '../utility/auth-permissions';
import { validateOnModel } from '../utility/validator';
import { Route } from '../routes/routes.types';

const router = Router();

router.post('/addorder', permit(['distributor']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderData = req.body;
      const order = await orderServices.createOrder(orderData);
      res.send(new ResponseHandler(order));
    } catch (e) {
      next(e);
    }
  }
);

//for customer's order
router.post(
  '/addorder/customer',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderData = req.body;
      const order = await orderServices.createOrder(orderData);
      res.send(new ResponseHandler(order));
    } catch (e) {
      next(e);
    }
  }
);

router.get('/:id', 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await orderServices.getOrderById(req.params.id);
      res.send(new ResponseHandler(order));
    } catch (e) {
      next(e);
    }
  }
);

router.get("/getAllOrders/", 
permit(['manufacturer', 'distributor']),
async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Orders are: ");
      const orders = await orderServices.getAllOrders({});
      console.log(orders)
      res.send(new ResponseHandler(orders));
    } catch (e) {
      next(e);
    }
  }
);

router.get('/orders/:user_id/:onModel', 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const onModel = validateOnModel(req.params.onModel);
      const orders = await orderServices.getOrdersByUserId(req.params.user_id, onModel);
      res.send(new ResponseHandler(orders));
    } catch (e) {
      next(e);
    }
  }
);

router.put('/:id/status', 
  permit(['manufacturer']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status } = req.body;
      const order = await orderServices.updateOrderStatus(req.params.id, status);
      res.send(new ResponseHandler(order));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route('/order', router);
