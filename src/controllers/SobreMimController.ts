import { SobreMimRepository } from "../repositories/SobreMimRepository";

export class SobreMimController{



    public async post(request,response){

        const key = request.headers['key'];

        if(key !== undefined && key !== null && key === process.env.KEY){
            const repository:SobreMimRepository = SobreMimRepository.getInstance();
            const result = await repository.create(request.body)
    
            if(result === true){
        
                return response.status(201).json({ message: "Cadastrado com sucesso" });
            }else{
        
                return response.status(500).json({ message: "Houve um erro"}); 
            }
        }else{
            return response.status(401).json({ message: "Informe a chave correta"}); 
        }

    }

    public async get(request,response){
        const repository:SobreMimRepository = SobreMimRepository.getInstance();
        try {
            const result = await repository.read();
            console.log(result)
            return response.status(201).json(result);    
        } catch (error) {
        
            return response.status(500).json({message:"Erro"});    
        }
    }


}