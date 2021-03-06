import { ContactRepository } from "../repositories/ContactRepository";
import { SupertipoController } from "./SupertipoControllers";



export class ContactController implements SupertipoController{

    

    public async post(request:any,response:any){

        const repository:ContactRepository = ContactRepository.getInstance();
        const result = await repository.create(request.body)

        if(result === true){
    
            return response.status(201).json({ message: "Cadastrado com sucesso" });
        }else{
    
            return response.status(500).json({ message: "Houve um erro"}); 
        }
        

    }

    public async get(request:any,response:any){
        const key = request.headers['key'];

        if(key !== undefined && key !== null && key === process.env.KEY){
            const repository:ContactRepository = ContactRepository.getInstance();
            try {
                const result = await repository.read();
                return response.status(201).json(result);    
            } catch (error) {
            
                return response.status(500).json({message:"Erro"});    
            }
        }else{
            return response.status(401).json({message: "Não autorizado"})
        }

    }


}