import { Schema, Document, model, Model } from "mongoose";
import { BaseSchema } from "../utility/base-schema";
import { ProductI } from "./product.types";

export interface ProductDocument extends Document, ProductI {}

const ProductSchema: Schema<ProductDocument> = new BaseSchema({
  product_name: { type: String, required: true },
  product_description: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_image: { type: String, required: false },
  quantity: { type: Number, required: false },
});

export const ProductModel: Model<ProductDocument> = model<ProductDocument>(
  "Product",
  ProductSchema
);
