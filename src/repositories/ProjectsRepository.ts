import { Projects } from "../models/Projects";

const {v4: uuid} = require('uuid');
export class ProjectsRepository{
    private static instance: ProjectsRepository;

    public static getInstance(): ProjectsRepository {
        if (!ProjectsRepository.instance) {
            ProjectsRepository.instance = new ProjectsRepository();
        }

        return ProjectsRepository.instance;
    }


    private mongoModel;


    private constructor(){
       this.mongoModel =  new Projects().mongoModel();
    }


    public async create(data: any):Promise<boolean>{

        const {name,imgs,about,linkProject} = data;

        if(!name || !imgs || !about ||!linkProject){
            return false
        }


        const newAbout = new this.mongoModel({
            _id: uuid(),
            name,
            imgs,
            about,
            linkProject
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