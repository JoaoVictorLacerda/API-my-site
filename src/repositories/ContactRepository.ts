import { Contact } from "../models/Contact";
const {v4: uuid} = require('uuid');

export class ContactRepository{
    private static instance: ContactRepository;

    public static getInstance(): ContactRepository {
        if (!ContactRepository.instance) {
            ContactRepository.instance = new ContactRepository();
        }

        return ContactRepository.instance;
    }


    private mongoModel;


    private constructor(){
       this.mongoModel =  new Contact().mongoModel();
    }


    public async create(data: any):Promise<boolean>{

        const {nameOrEmail,message} = data;

        if(!message){
            return false
        }


        const newAbout = new this.mongoModel({
            _id: uuid(),
            nameOrEmail,
            message
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