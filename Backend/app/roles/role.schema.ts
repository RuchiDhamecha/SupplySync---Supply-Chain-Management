import { Schema, Document, model } from 'mongoose';
import { BaseSchema } from '../utility/base-schema';

export interface RoleDocument extends Document {
  name: 'manufacturer' | 'distributor' | 'customer';
}

const roleSchema: Schema<RoleDocument> = new BaseSchema({
  name: {
    type: String,
    enum: ['manufacturer', 'distributor', 'customer'],
    required: true,
  },
});

const Role = model<RoleDocument>('Role', roleSchema);

export default Role;
