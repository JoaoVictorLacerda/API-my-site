import express from 'express';
import cors from 'cors';
import { SobreMimRoute } from './routes/SobreMimRoute';
import { ProjectsRoute } from './routes/ProjectsRoute';
import { ContactRoute } from './routes/ContactRoute';

export class App{
    private app;

    constructor(){
        this.app = express()
        this.configuraApp();
        this.configuraRouters();
    }


    private configuraApp():void{


        this.app.use(express.json());
        this.app.use(cors())

    }

    private configuraRouters():void{
        const routeSobreMim = new SobreMimRoute();
        const routeProjects = new ProjectsRoute();
        const routeContact = new ContactRoute();
    
        this.app.use('/sobre-mim',routeSobreMim.getRoute())
        this.app.use('/projects', routeProjects.getRoute())
        this.app.use('/contact',  routeContact.getRoute())

    }

    public getApp(){
        return this.app;
    }
}