import mongoose  from "mongoose";
export class Connection{
    constructor(){
        mongoose.connect(process.env.DATABASE_URL!);
    
        const db = mongoose.connection;
        db.on("error", (error: { message: any; }) => console.log("Erro ao conectar ao banco de dados: ", error.message));
    
        db.once("open", () => {
            console.log("conectado com o db")
        });
    }
}
