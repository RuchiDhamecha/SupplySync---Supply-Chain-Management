import { Router, Request, Response, NextFunction } from "express";
import productServices from "./product.services";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/routes.types";
import { CustomRequest, permit } from "../utility/auth-permissions";
// import { verifyManufacturerOrDistributorRole, verifyManufacturerRole, verifyTokenAndRole } from "../utility/auth-permissions";


const router = Router();

router.post("/addproduct", 
permit(['manufacturer']),
async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Created Product Is: ");
      const product = await productServices.createProduct(req.body);
      res.send(new ResponseHandler(product));
    } catch (e) {
      next(e);
    }
  }
);

router.put("/:id", 
permit(['manufacturer']),
async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Updated Product Is: ");
      const product = await productServices.updateProduct(
        req.params.id,
        req.body
      );
      res.send(new ResponseHandler(product));
    } catch (e) {
      next(e);
    }
  }
);

router.delete("/:id", 
permit(['manufacturer']),
async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      console.log("Deleted Product Is: ");
      const product = await productServices.deleteProduct(req.params.id);
      res.send(new ResponseHandler(product));
    } catch (e) {
      next(e);
    }
  }
);

router.get("/:id", 
permit(['manufacturer', 'distributor']),
async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Product is: ");
      const product = await productServices.getProductById(req.params.id);
      res.send(new ResponseHandler(product));
    } catch (e) {
      next(e);
    }
  }
);

router.get("/", 
permit(['manufacturer', 'distributor']),
async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Products are: ");
      const products = await productServices.getProducts({});

      console.log(products)
      res.send(new ResponseHandler(products));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route("/products", router);
