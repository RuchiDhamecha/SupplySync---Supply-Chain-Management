// import { match } from "path-to-regexp";
// import authRouter from "../auth/auth.routes";
// import { ExcludedRoutes } from "./routes.types";
// import productRouter from "../products/product.routes"
// import merchRouter from "../merchandise/merchandise.routes"
// import userRouter from "../users/user.routes"

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
import { match } from "path-to-regexp";
import authRouter from "../auth/auth.routes";
import { ExcludedRoutes } from "./routes.types";
import productRouter from "../products/product.routes";
import merchRouter from "../merchandise/merchandise.routes";
import userRouter from "../users/user.routes";
import customerRouter from "../customers/customer.routes";

export const routes = [
  authRouter,
  productRouter,
  merchRouter,
  userRouter,
  customerRouter,
];

export const excludedRoutes: ExcludedRoutes = [
  {
    path: match("/user/users"),
    method: "GET",
  },
  {
    path: match("/user/distributors"),
    method: "GET",
  },
  {
    path: match("/user/distributor/:id"),
    method: "PUT",
  },
  {
    path: match("/user/distributor/:id"),
    method: "DELETE",
  },
  {
    path: match("/auth/user/email/:email"),
    method: "GET",
  },
  {
    path: match("/user/register"),
    method: "POST",
  },
  {
    path: match("/user/register-many"),
    method: "POST",
  },
  {
    path: match("/auth/login"),
    method: "POST",
  },
  {
    path: match("/auth/logout"),
    method: "POST",
  },
  {
    path: match("/products/addproduct"),
    method: "POST",
  },
  {
    path: match("/products/:id"),
    method: "DELETE",
  },
  {
    path: match("/products/:id"),
    method: "PUT",
  },
  {
    path: match("/products/:id"),
    method: "GET",
  },
  {
    path: match("/products/"),
    method: "GET",
  },
  {
    path: match("/merchandise/addmerch"),
    method: "POST",
  },
  {
    path: match("/merchandise/:id"),
    method: "DELETE",
  },
  {
    path: match("/merchandise/:id"),
    method: "PUT",
  },
  {
    path: match("/merchandise/:id"),
    method: "GET",
  },
  {
    path: match("/merchandise/"),
    method: "GET",
  },
  {
    path: match("/customer/addcustomer"),
    method: "POST",
  },
  {
    path: match("/customer/:id"),
    method: "DELETE",
  },
  {
    path: match("/customer/:id"),
    method: "PUT",
  },
  {
    path: match("/customer/:id"),
    method: "GET",
  },
  {
    path: match("/customer/"),
    method: "GET",
  },
  {
    path: match("/user/orders/customerOrder"),
    method: "POST",
  },
  {
    path: match("/user/orders/distributorOrder"),
    method: "POST",
  },
  {
    path: match("/user/orders/distributorOrders"),
    method: "POST",
  },
  {
    path: match("/user/orders/update-status/:orderId"),
    method: "PUT",
  },
  {
    path: match("/user/orders/update-CustomerOrderStatus/:orderId"),
    method: "PUT",
  },
  {
    path: match("/user/orders/accepted"),
    method: "GET",
  },
  {
    path: match("/user/orders/rejected"),
    method: "GET",
  },
  {
    path: match("/user/orders/pending"),
    method: "GET",
  },
  {
    path: match("/order/:id/status"),
    method: "PUT",
  },
  {
    path: match("/order/orders/:user_id/:onModel"),
    method: "GET",
  },
  {
    path: match("/order/getAllOrders/"),
    method: "GET",
  },
  {
    path: match("/order/:id"),
    method: "GET",
  },
  {
    path: match("/order/addorder/customer"),
    method: "POST",
  },
  {
    path: match("/order/addorder"),
    method: "POST",
  },
];
