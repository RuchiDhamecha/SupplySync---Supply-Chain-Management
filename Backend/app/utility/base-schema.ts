import mongoose, { Schema, SchemaDefinitionProperty } from "mongoose";

export class BaseSchema extends Schema {
    constructor(schema: { [key: string]: SchemaDefinitionProperty }) {
        super({
            ...schema,
            isDeleted : {
                type:Boolean,
                require:true,
                default:false
            },
            createdAt : {
                type:Date,
                default:Date.now()
            },
            updatedAt : {
                type:Date,
                default:Date.now()
            },
            deletedAt : {
                type:Date,
                default:Date.now()
            },
        },{timestamps:true});
    }
}