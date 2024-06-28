"use strict";
// import { match } from "path-to-regexp";
// import authRouter from "../auth/auth.routes";
// import { ExcludedRoutes } from "./routes.types";
// import productRouter from "../products/product.routes"
// import merchRouter from "../merchandise/merchandise.routes"
// import userRouter from "../users/user.routes"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedRoutes = exports.routes = void 0;
// export const routes = [authRouter, productRouter, merchRouter, userRouter];
// export const excludedRoutes: ExcludedRoutes = [
//   {
//     path: match("/auth/user/id/:id"),
//     method: "GET",
//   },
//   {
//     path: match("/user/users"),
//     method: "GET",
//   },
//   {
//     path: match("/user/distributors"),
//     method: "GET",
//   },
//   {
//     path: match("/user/distributor/:id"),
//     method: "PUT",
//   },
//   {
//     path: match("/user/distributor/:id"),
//     method: "DELETE",
//   },
//   {
//     path: match("/auth/user/email/:email"),
//     method: "GET",
//   },
//   {
//     path: match("/auth/register"),
//     method: "POST",
//   },
//   {
//     path: match("/auth/register-many"),
//     method: "POST",
//   },
//   {
//     path: match("/auth/login"),
//     method: "POST",
//   },
//   {
//     path: match("/products/addproduct"),
//     method: "POST",
//   },
//   {
//     path: match("/products/:id"),
//     method: "DELETE",
//   },
//   {
//     path: match("/products/:id"),
//     method: "PUT",
//   },
//   {
//     path: match("/products/:id"),
//     method: "GET",
//   },
//   {
//     path: match("/products/"),
//     method: "GET",
//   },
//   {
//     path: match("/merchandise/addmerch"),
//     method: "POST",
//   },
//   {
//     path: match("/merchandise/:id"),
//     method: "DELETE",
//   },
//   {
//     path: match("/merchandise/:id"),
//     method: "PUT",
//   },
//   {
//     path: match("/merchandise/:id"),
//     method: "GET",
//   },
//   {
//     path: match("/merchandise/"),
//     method: "GET",
//   },
// ];
const path_to_regexp_1 = require("path-to-regexp");
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const product_routes_1 = __importDefault(require("../products/product.routes"));
const merchandise_routes_1 = __importDefault(require("../merchandise/merchandise.routes"));
const user_routes_1 = __importDefault(require("../users/user.routes"));
const customer_routes_1 = __importDefault(require("../customers/customer.routes"));
exports.routes = [
    auth_routes_1.default,
    product_routes_1.default,
    merchandise_routes_1.default,
    user_routes_1.default,
    customer_routes_1.default,
];
exports.excludedRoutes = [
    {
        path: (0, path_to_regexp_1.match)("/user/users"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/distributors"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/distributor/:id"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/distributor/:id"),
        method: "DELETE",
    },
    {
        path: (0, path_to_regexp_1.match)("/auth/user/email/:email"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/register"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/register-many"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/auth/login"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/auth/logout"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/products/addproduct"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/products/:id"),
        method: "DELETE",
    },
    {
        path: (0, path_to_regexp_1.match)("/products/:id"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/products/:id"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/products/"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/merchandise/addmerch"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/merchandise/:id"),
        method: "DELETE",
    },
    {
        path: (0, path_to_regexp_1.match)("/merchandise/:id"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/merchandise/:id"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/merchandise/"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/customer/addcustomer"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/customer/:id"),
        method: "DELETE",
    },
    {
        path: (0, path_to_regexp_1.match)("/customer/:id"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/customer/:id"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/customer/"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/customerOrder"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/distributorOrder"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/distributorOrders"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/update-status/:orderId"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/update-CustomerOrderStatus/:orderId"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/accepted"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/rejected"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/user/orders/pending"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/:id/status"),
        method: "PUT",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/orders/:user_id/:onModel"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/getAllOrders/"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/:id"),
        method: "GET",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/addorder/customer"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/order/addorder"),
        method: "POST",
    },
];
