"use strict";
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
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const auth_services_1 = __importDefault(require("../auth/auth.services"));
const response_handler_1 = require("../utility/response-handler");
const auth_validations_1 = require("../auth/auth.validations");
const user_types_1 = require("../users/user.types");
const user_services_1 = __importDefault(require("../users/user.services"));
const auth_permissions_1 = require("../utility/auth-permissions");
const order_repo_1 = __importDefault(require("../orders/order.repo"));
const product_schema_1 = require("../products/product.schema");
const order_schema_1 = require("../orders/order.schema");
const customer_schema_1 = require("../customers/customer.schema");
const user_schema_1 = require("./user.schema");
const router = (0, express_1.Router)();
// Register new user(distributor)
router.post("/register", (0, auth_permissions_1.permit)(["manufacturer"]), ...auth_validations_1.SignUpValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = user_types_1.UserSchema.parse(req.body);
        const user = yield auth_services_1.default.register(userData);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (e) {
        next(e);
    }
}));
//Resgiter many users(distributors)
router.post("/register-many", (0, auth_permissions_1.permit)(["manufacturer"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersData = req.body.map((user) => user_types_1.UserSchema.parse(user));
        const users = yield auth_services_1.default.registerMany(usersData);
        res.send(new response_handler_1.ResponseHandler(users));
    }
    catch (e) {
        next(e);
    }
}));
//Get any user by id - Distributor & Customer
router.get("/user/id/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_services_1.default.getUserById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (e) {
        next(e);
    }
}));
//Get all users
router.get("/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_services_1.default.getUsers({});
        res.send(new response_handler_1.ResponseHandler(users));
    }
    catch (e) {
        next(e);
    }
}));
//Get only distributors
router.get("/distributors", (0, auth_permissions_1.permit)(["manufacturer"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distributors = yield user_services_1.default.getDistributors({
            roleId: { $in: [2] },
        });
        res.send(new response_handler_1.ResponseHandler(distributors));
    }
    catch (e) {
        next(e);
    }
}));
router.put("/distributor/:id", (0, auth_permissions_1.permit)(["manufacturer"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Updated Distributor Is: ");
        const dist = yield user_services_1.default.updateDistributor(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(dist));
    }
    catch (e) {
        next(e);
    }
}));
router.delete("/distributor/:id", (0, auth_permissions_1.permit)(["manufacturer"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Deleted Distributor Is: ");
        const distributor = yield user_services_1.default.deleteDistributor(req.params.id);
        res.send(new response_handler_1.ResponseHandler(distributor));
    }
    catch (e) {
        next(e);
    }
}));
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
router.get("/orders/accepted", (0, auth_permissions_1.permit)(["manufacturer", "distributor"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distributorId = req.payload.user_id;
        const acceptedOrders = yield order_repo_1.default.getAcceptedOrdersByDistributorId(distributorId);
        res.send(new response_handler_1.ResponseHandler(acceptedOrders));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/orders/pending", (0, auth_permissions_1.permit)(["manufacturer", "distributor"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distributorId = req.payload.user_id;
        const acceptedOrders = yield order_repo_1.default.getPendingOrdersByDistributorId(distributorId);
        res.send(new response_handler_1.ResponseHandler(acceptedOrders));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/orders/rejected", (0, auth_permissions_1.permit)(["manufacturer", "distributor"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distributorId = req.payload.user_id;
        const rejectedOrders = yield order_repo_1.default.getRejectedOrdersByDistributorId(distributorId);
        res.send(new response_handler_1.ResponseHandler(rejectedOrders));
    }
    catch (e) {
        next(e);
    }
}));
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
router.put("/orders/update-status/:orderId", (0, auth_permissions_1.permit)(["manufacturer"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const { order_status } = req.body;
        const updatedOrder = yield order_repo_1.default.updateOrderStatus(orderId, order_status);
        if (!updatedOrder) {
            return res.send({ message: "Order not found." });
        }
        res.send(new response_handler_1.ResponseHandler(updatedOrder));
    }
    catch (error) {
        next(error);
    }
}));
router.put("/orders/update-CustomerOrderStatus/:orderId", (0, auth_permissions_1.permit)(["distributor"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const { order_status } = req.body;
        const updatedOrder = yield order_repo_1.default.updateOrderStatus(orderId, order_status);
        if (!updatedOrder) {
            return res.send({ message: "Order not found." });
        }
        res.send(new response_handler_1.ResponseHandler(updatedOrder));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/orders/distributorOrder", (0, auth_permissions_1.permit)(["distributor"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { products } = req.body;
        const distributorId = req.payload.user_id;
        let orderTotalPrice = 0;
        const productDetailsArray = [];
        for (const product of products) {
            const { product_name, quantity } = product;
            const productDetails = yield product_schema_1.ProductModel.findOne({ product_name });
            if (productDetails) {
                productDetailsArray.push({
                    product_name: productDetails.product_name,
                    product_price: productDetails.product_price,
                    quantity: quantity,
                });
                orderTotalPrice += productDetails.product_price * quantity;
            }
            else {
                return res.status(404).send({ message: `Product ${product_name} not found` });
            }
        }
        const newOrder = new order_schema_1.OrderModel({
            order_date: new Date(),
            order_total_price: orderTotalPrice,
            order_status: "pending",
            user_id: distributorId,
            onModel: "User",
            products: productDetailsArray,
        });
        yield newOrder.save();
        res.send(new response_handler_1.ResponseHandler(newOrder));
    }
    catch (e) {
        next(e);
    }
}));
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
router.post('/orders/customerOrder', (0, auth_permissions_1.permit)(['distributor']), // Assuming only distributors can place customer orders
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerName, products } = req.body;
        const distributorId = req.payload.user_id;
        const distributorName = req.payload.user_name;
        const customer = yield customer_schema_1.CustomerModel.findOne({ customer_name: customerName });
        if (!customer) {
            return res.status(404).send({ message: 'Customer not found' });
        }
        let orderTotalPrice = 0;
        const productDetailsArray = [];
        for (const product of products) {
            const { product_name, quantity } = product;
            const productDetails = yield product_schema_1.ProductModel.findOne({ product_name });
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
        const newOrder = new order_schema_1.OrderModel({
            order_date: new Date(),
            order_total_price: orderTotalPrice,
            order_status: "pending",
            user_id: distributorId,
            onModel: "User",
            products: productDetailsArray,
            customer_name: customer.customer_name,
            distributor_name: distributorName,
        });
        const savedOrder = yield newOrder.save();
        // Update distributor's points
        yield user_schema_1.UserModel.findOneAndUpdate({ _id: distributorId }, { $inc: { "details.$.points": 1000 } }, { new: true });
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
        res.send(new response_handler_1.ResponseHandler(responseData));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/user", router);
