import { Contact } from "../models/Contact";
import { SupertipoRepository } from "./SupertipoRepository";

const {v4: uuid} = require('uuid');

export class ContactRepository implements SupertipoRepository{
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
            await this.sendEmail(data);
            return true;
    
        }catch(err){
            return false;
    
        }
        
    }

    private async sendEmail(message:any){
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

        transporter.sendMail({
            from:"Mensagem Meu Site <devictor002@gmail.com>",
            to: "victorqueiroz90@outlook.com",
            subject: "Olá, meu nome é: "+ message.nameOrEmail,
            text: "Mensagem: "+message.message
        });
    }

    public async read(){
        const about = await this.mongoModel.find();
        return about;
    }


}