import express, { Application, json, NextFunction, Request, Response, } from "express";
import { routes } from './routes.data'
import { ResponseHandler } from "../utility/response-handler";
import {excludedRoutes} from './routes.data'
import { validateToken } from "../utility/validate-permissions";
import cors from 'cors'
import bodyParser from "body-parser";

export const registerMiddlewares = (app: Application) => {
    app.use(cors())
    app.use(json())    
    app.use(validateToken(excludedRoutes))
    // app.use('/uploads', express.static('uploads'));

    for (let route of routes) {
        app.use(route.path, route.router)
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(
            new ResponseHandler(null, err)
        )
    })
}