require('dotenv').config()

import {App} from './App'
import os from 'os'
import { Connection } from './database/Connection';

class Server{
    private app:App;
    private server;
    private PORT =process.env.PORT! || 3000;

    constructor(){
        this.app = new App();
        this.server = this.app.getApp();
    }

    public startServer():void{
        this.server.listen(this.PORT,this.showTheSystemInformation)
        new Connection();
    }

    private showTheSystemInformation():void{
        const arch = os.arch()
        const plataform = os.platform()
        const type = os.type()
        const mem = os.totalmem()
        const cpus = os.cpus()
        const port:Number =3000;

        console.log(`SERVICE RUNNING ON PORT: ${port}`)
        console.log(`SO: ${type} ${plataform} ${arch}`)
        console.log(`RAM: ${Math.floor(mem * (10 ** -9))} GB`)
        console.log(`CORES: ${cpus.length}`)
        console.log(`CPU: ${cpus[0].model}`)
    }
}

const server = new Server()
server.startServer();