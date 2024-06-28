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
exports.createRoles = void 0;
const role_schema_1 = __importDefault(require("./role.schema"));
const createRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if roles exist
        const existingRoles = yield role_schema_1.default.find();
        if (existingRoles.length === 0) {
            // Roles not found, create them
            yield role_schema_1.default.create([
                { _id: 1, name: 'manufacturer' },
                { _id: 2, name: 'distributor' },
                { _id: 3, name: 'customer' },
            ]);
            console.log('Roles created successfully');
        }
        else {
            console.log('Roles already exist');
        }
    }
    catch (error) {
        console.error('Error creating roles:', error);
        throw error;
    }
});
exports.createRoles = createRoles;
