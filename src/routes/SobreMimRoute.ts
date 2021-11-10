import express from "express";
import { SobreMimController } from "../controllers/SobreMimController";

export class SobreMimRoute{
    private route = express.Router();

    constructor(){
        const controller = new SobreMimController();
        
        this.route.post('/',controller.post)
        this.route.get('/',controller.get)
    }

    public getRoute():express.Router{

        return this.route;
    }
}