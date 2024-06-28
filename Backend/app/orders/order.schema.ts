import { Schema, Document, model, Model } from 'mongoose';
import { BaseSchema } from '../utility/base-schema';
import { OrderI } from './order.types';

export interface OrderDocument extends Document, OrderI {}

const orderSchema: Schema<OrderDocument> = new BaseSchema({
  order_date: {
    type: Date,
    required: false,
  },
  order_total_price: {
    type: Number,
    required: false,
  },
  order_status: {
    type: String,
    required: true,
    enum: ['pending', 'accepted', 'rejected'],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: false,
    refPath: 'onModel',
  },
  onModel: {
    type: String,
    required: true,
    enum: ['User', 'Customer'],
  },
  customer_name: { 
    type: String, 
    required: false 
  },
  distributor_name: { 
    type: String, 
    required: false 
  },
  products: [{
    // product_id: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Product',
    // },
    product_name: {
      type: Schema.Types.String,
      required: true,
      ref: 'Product'
    },
    product_price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
});

export const OrderModel: Model<OrderDocument> = model<OrderDocument>('Order', orderSchema);
