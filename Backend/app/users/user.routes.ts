import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../routes/routes.types";
import authServices from "../auth/auth.services";
import { ResponseHandler } from "../utility/response-handler";
import { LoginValidations, SignUpValidations } from "../auth/auth.validations";
import { UserSchema } from "../users/user.types";
import userServices from "../users/user.services";
import { CustomRequest, permit } from "../utility/auth-permissions";
import orderRepo from "../orders/order.repo";
import { ProductModel } from "../products/product.schema";
import { OrderModel } from "../orders/order.schema";
import inventoryServices from "../inventory/inventory.services";
import { CustomerModel } from "../customers/customer.schema";
import { UserModel } from "./user.schema";

const router = Router();

// Register new user(distributor)
router.post(
  "/register",
  permit(["manufacturer"]),
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

//Resgiter many users(distributors)
router.post(
  "/register-many",
  permit(["manufacturer"]),
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

//Get any user by id - Distributor & Customer
router.get(
  "/user/id/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userServices.getUserById(req.params.id);
      res.send(new ResponseHandler(user));
    } catch (e) {
      next(e);
    }
  }
);

//Get all users
router.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userServices.getUsers({});
      res.send(new ResponseHandler(users));
    } catch (e) {
      next(e);
    }
  }
);

//Get only distributors
router.get(
  "/distributors",
  permit(["manufacturer"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const distributors = await userServices.getDistributors({
        roleId: { $in: [2] },
      });
      res.send(new ResponseHandler(distributors));
    } catch (e) {
      next(e);
    }
  }
);

router.put(
  "/distributor/:id",
  permit(["manufacturer"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Updated Distributor Is: ");
      const dist = await userServices.updateDistributor(
        req.params.id,
        req.body
      );
      res.send(new ResponseHandler(dist));
    } catch (e) {
      next(e);
    }
  }
);

router.delete(
  "/distributor/:id",
  permit(["manufacturer"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Deleted Distributor Is: ");
      const distributor = await userServices.deleteDistributor(req.params.id);
      res.send(new ResponseHandler(distributor));
    } catch (e) {
      next(e);
    }
  }
);

// router.get(
//   "/orders/accepted",
//   permit(["distributor"]),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const distributorId = req.payload.user_id;
//       const acceptedOrders = await orderRepo.getAcceptedOrdersByDistributorId(
//         distributorId
//       );
//       // Extract products from accepted orders
//       const acceptedProducts = acceptedOrders.map(order => order.products).flat();
//       res.send(new ResponseHandler(acceptedProducts));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

router.get(
  "/orders/accepted",
  permit(["manufacturer","distributor"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const distributorId = req.payload.user_id;
      const acceptedOrders = await orderRepo.getAcceptedOrdersByDistributorId(
        distributorId
      );
      res.send(new ResponseHandler(acceptedOrders));
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/orders/pending",
  permit(["manufacturer","distributor"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const distributorId = req.payload.user_id;
      const acceptedOrders = await orderRepo.getPendingOrdersByDistributorId(
        distributorId
      );
      res.send(new ResponseHandler(acceptedOrders));
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/orders/rejected",
  permit(["manufacturer","distributor"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const distributorId = req.payload.user_id;
      const rejectedOrders = await orderRepo.getRejectedOrdersByDistributorId(
        distributorId
      );
      res.send(new ResponseHandler(rejectedOrders));
    } catch (e) {
      next(e);
    }
  }
);

// router.get(
//   "/orders/rejected",
//   permit(["distributor"]),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const distributorId = req.payload.user_id;
//       const acceptedOrders = await orderRepo.getRejectedOrdersByDistributorId(
//         distributorId
//       );
//       // Extract products from accepted orders
//       const acceptedProducts = acceptedOrders.map(order => order.products).flat();
//       res.send(new ResponseHandler(acceptedProducts));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// router.get(
//   "/orders/accepted",
//   permit(["distributor"]),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const distributorId = req.payload.user_id;
//       const acceptedOrders = await orderRepo.getAcceptedOrdersByDistributorId(
//         distributorId
//       );
//       res.send(new ResponseHandler(acceptedOrders));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

router.put(
  "/orders/update-status/:orderId",
  permit(["manufacturer"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { orderId } = req.params;
      const { order_status } = req.body;
      const updatedOrder = await orderRepo.updateOrderStatus(
        orderId,
        order_status
      );
      if (!updatedOrder) {
        return res.send({ message: "Order not found." });
      }
      res.send(new ResponseHandler(updatedOrder));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/orders/update-CustomerOrderStatus/:orderId",
  permit(["distributor"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { orderId } = req.params;
      const { order_status } = req.body;
      const updatedOrder = await orderRepo.updateOrderStatus(
        orderId,
        order_status
      );
      if (!updatedOrder) {
        return res.send({ message: "Order not found." });
      }
      res.send(new ResponseHandler(updatedOrder));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/orders/distributorOrder",
  permit(["distributor"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { products } = req.body;
      const distributorId = req.payload.user_id; 

      let orderTotalPrice = 0;
      const productDetailsArray = [];

      for (const product of products) {
        const { product_name, quantity } = product;
        const productDetails = await ProductModel.findOne({ product_name });
        if (productDetails) {
          productDetailsArray.push({
            product_name: productDetails.product_name,
            product_price: productDetails.product_price,
            quantity: quantity,
          });
          orderTotalPrice += productDetails.product_price * quantity;
        } else {
          return res.status(404).send({ message: `Product ${product_name} not found` });
        }
      }

      const newOrder = new OrderModel({
        order_date: new Date(),
        order_total_price: orderTotalPrice,
        order_status: "pending",
        user_id: distributorId, 
        onModel: "User",
        products: productDetailsArray,
      });

      await newOrder.save();
      res.send(new ResponseHandler(newOrder));
    } catch (e) {
      next(e);
    }
  }
);

// router.post(
//   '/orders/distributorOrder',
//   permit(['distributor']),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { products } = req.body;
//       const distributorId = req.payload.user_id;

//       // Fetch the distributor details
//       const distributor = await UserModel.findOne({ _id: distributorId, roleId: 2 });
//       if (!distributor) {
//         return res.status(404).send({ message: 'Distributor not found' });
//       }

//       const distributorName = distributor.details[0].user_name; // Assuming the first detail object contains the user_name

//       // Calculate total price and prepare product details
//       let orderTotalPrice = 0;
//       const productDetailsArray = [];

//       for (const product of products) {
//         const { product_name, quantity } = product;
//         const productDetails = await ProductModel.findOne({ product_name });
//         if (!productDetails) {
//           return res.status(404).send({ message: `Product ${product_name} not found` });
//         }
//         productDetailsArray.push({
//           product_name: productDetails.product_name,
//           product_price: productDetails.product_price,
//           quantity: quantity,
//         });
//         orderTotalPrice += productDetails.product_price * quantity;
//       }

//       // Create order for distributor
//       const newOrder = new OrderModel({
//         order_date: new Date(),
//         order_total_price: orderTotalPrice,
//         order_status: "pending",
//         user_id: distributorId,
//         onModel: "User",
//         products: productDetailsArray,
//         distributor_name: distributorName, // Store distributor's name in the order
//       });

//       const savedOrder = await newOrder.save(); // Save the new order

//       // Prepare response with distributor's name included
//       const responseData = {
//         order_date: savedOrder.order_date,
//         order_total_price: savedOrder.order_total_price,
//         order_status: savedOrder.order_status,
//         onModel: savedOrder.onModel,
//         products: savedOrder.products,
//         distributor_name: savedOrder.distributor_name, // Include distributor's name in the response
//         _id: savedOrder._id,
//         __v: savedOrder.__v,
//       };

//       res.send(new ResponseHandler(responseData));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// router.post(
//   "/orders/customerOrder",
//   permit(["distributor"]),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { customerName, products } = req.body;
//       const distributorId = req.payload.user_id;

//       // Calculate total price
//       let orderTotalPrice = 0;
//       const productDetailsArray = [];

//       for (const product of products) {
//         const { product_name, quantity } = product;
//         const productDetails = await ProductModel.findOne({ product_name });
//         if (productDetails) {
//           productDetailsArray.push({
//             product_name: productDetails.product_name,
//             product_price: productDetails.product_price,
//             quantity: quantity,
//           });
//           orderTotalPrice += productDetails.product_price * quantity;
//         } else {
//           return res.status(404).send({ message: `Product ${product_name} not found` });
//         }
//       }

//       // Create order for customer
//       const newOrder = new OrderModel({
//         order_date: new Date(),
//         order_total_price: orderTotalPrice,
//         order_status: "pending",
//         user_id: distributorId,
//         onModel: "Customer",
//         products: productDetailsArray,
//         customer_name: customerName,
//       });

//       await newOrder.save();
//       res.send(new ResponseHandler(newOrder));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// router.post(
//   '/orders/customerOrder',
//   permit(['distributor']),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { customerName, products } = req.body;
//       const distributorId = req.payload.user_id; 
//       const distributorName = req.payload.user_name; 
      
//       const customer = await CustomerModel.findOne({ customer_name: customerName });
//       if (!customer) {
//         return res.status(404).send({ message: 'Customer not found' });
//       }

//       // Calculate total price and prepare product details
//       let orderTotalPrice = 0;
//       const productDetailsArray = [];

//       for (const product of products) {
//         const { product_name, quantity } = product;
//         const productDetails = await ProductModel.findOne({ product_name });
//         if (!productDetails) {
//           return res.status(404).send({ message: `Product ${product_name} not found` });
//         }
//         productDetailsArray.push({
//           product_name: productDetails.product_name,
//           product_price: productDetails.product_price,
//           quantity: quantity,
//         });
//         orderTotalPrice += productDetails.product_price * quantity;
//       }

//       // Create order for customer
//       const newOrder = new OrderModel({
//         order_date: new Date(),
//         order_total_price: orderTotalPrice,
//         order_status: "pending",
//         user_id: distributorId,
//         onModel: "Customer",
//         products: productDetailsArray,
//         customer_name: customer.customer_name, // Store customer's name in the order
//         distributor_name: distributorName, // Store distributor's name in the order
//       });

//       const savedOrder = await newOrder.save(); // Save the new order

//       // Prepare response with customer's name and distributor's name included
//       const responseData = {
//         order_date: savedOrder.order_date,
//         order_total_price: savedOrder.order_total_price,
//         order_status: savedOrder.order_status,
//         onModel: savedOrder.onModel,
//         products: savedOrder.products,
//         customer_name: savedOrder.customer_name, // Include customer's name in the response
//         distributor_name: savedOrder.distributor_name, // Include distributor's name in the response
//         _id: savedOrder._id,
//       };
//       res.send(new ResponseHandler(responseData));
//       console.log(responseData)
//     } catch (e) {
//       next(e);
//     }
//   }
// );


router.post(
  '/orders/customerOrder',
  permit(['distributor']), // Assuming only distributors can place customer orders
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { customerName, products } = req.body;
      const distributorId = req.payload.user_id;
      const distributorName = req.payload.user_name;

      const customer = await CustomerModel.findOne({ customer_name: customerName });
      if (!customer) {
        return res.status(404).send({ message: 'Customer not found' });
      }

      let orderTotalPrice = 0;
      const productDetailsArray = [];

      for (const product of products) {
        const { product_name, quantity } = product;
        const productDetails = await ProductModel.findOne({ product_name });
        if (!productDetails) {
          return res.status(404).send({ message: `Product ${product_name} not found` });
        }
        productDetailsArray.push({
          product_name: productDetails.product_name,
          product_price: productDetails.product_price,
          quantity: quantity,
        });
        orderTotalPrice += productDetails.product_price * quantity;
      }

      const newOrder = new OrderModel({
        order_date: new Date(),
        order_total_price: orderTotalPrice,
        order_status: "pending",
        user_id: distributorId,
        onModel: "User",
        products: productDetailsArray,
        customer_name: customer.customer_name,
        distributor_name: distributorName,
      });

      const savedOrder = await newOrder.save();

      // Update distributor's points
      await UserModel.findOneAndUpdate(
        { _id: distributorId },
        { $inc: { "details.$.points": 1000 } },
        { new: true }
      );

      const responseData = {
        order_date: savedOrder.order_date,
        order_total_price: savedOrder.order_total_price,
        order_status: savedOrder.order_status,
        onModel: savedOrder.onModel,
        products: savedOrder.products,
        customer_name: savedOrder.customer_name,
        distributor_name: savedOrder.distributor_name,
        distributor_id: distributorId, // Include distributor's ID in the response
        _id: savedOrder._id,
      };

      res.send(new ResponseHandler(responseData));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route("/user", router);