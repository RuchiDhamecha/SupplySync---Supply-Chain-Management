import { Schema, Document, model, Model, Types } from 'mongoose';

interface Product {
  product_name: string;
  quantity: number;
}

interface InventoryI {
  distributor_id: Types.ObjectId;
  products: Product[];
}

interface InventoryDocument extends Document, InventoryI {}

const productSchema = new Schema<Product>({
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const inventorySchema = new Schema<InventoryDocument>({
  distributor_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  products: [productSchema],
});

const InventoryModel: Model<InventoryDocument> = model<InventoryDocument>('Inventory', inventorySchema);

export { InventoryI, InventoryDocument, InventoryModel };
