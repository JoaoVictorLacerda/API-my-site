import {SobreMim} from '../models/SobreMim'
const {v4: uuid} = require('uuid');

export class SobreMimRepository{

    //padrão singleton
    private static instance: SobreMimRepository;

    public static getInstance(): SobreMimRepository {
        if (!SobreMimRepository.instance) {
            SobreMimRepository.instance = new SobreMimRepository();
        }

        return SobreMimRepository.instance;
    }

    //padrão singleton

    private mongoModel;


    private constructor(){
       this.mongoModel =  new SobreMim().mongoModel();
    }




    public async create(data: any):Promise<boolean>{

        const {about} = data;
        console.log(about)


        const newAbout = new this.mongoModel({
            _id: uuid(),
            about
        })
        
        try{
            await newAbout.save();
            return true;
    
        }catch(err){
            return false;
    
        }
        
    }

    public async read(){
        const about = await this.mongoModel.find();
        return about;
    }
}