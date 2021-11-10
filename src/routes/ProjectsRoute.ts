import express from "express";
import { ProjectsController } from "../controllers/ProjectsController";

export class ProjectsRoute{
    private route = express.Router();

    constructor(){
        const controller = new ProjectsController();
        
        this.route.post('/',controller.post)
        this.route.get('/',controller.get)
    }

    public getRoute():express.Router{

        return this.route;
    }
}