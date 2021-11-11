import express from "express";
import { ContactController } from "../controllers/ContactController";

export class ContactRoute{
    private route = express.Router();

    constructor(){
        const controller = new ContactController();
        
        this.route.post('/',controller.post)
        this.route.get('/',controller.get)
    }

    public getRoute():express.Router{

        return this.route;
    }
}