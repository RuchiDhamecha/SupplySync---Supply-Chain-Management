import { Schema, Document, Model, model } from 'mongoose';
import { BaseSchema } from '../utility/base-schema';

interface CustomerI {
  customer_name: string;
  email: string;
  mobile_number: number;
  address: string;
}

interface CustomerDocument extends Document, CustomerI {}

const customerSchema: Schema<CustomerDocument> = new BaseSchema({
  customer_name: { type: String, required: true },
  email: { type: String, required: true },
  mobile_number: { type: Number, required: true },
  address: { type: String, required: true }
});

export const CustomerModel: Model<CustomerDocument> = model<CustomerDocument>('Customer', customerSchema);
export { CustomerI, CustomerDocument };
