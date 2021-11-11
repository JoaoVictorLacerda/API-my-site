import mongoose from "mongoose";
export class Projects{

    public mongoModel(){
        const userSchema = new mongoose.Schema({
            _id:{
                type:String,
                required: true
            },
            name:{
                type:String,
                required: true
            },

            imgs:[{
                type: String,
                required: true,
            }],
            about:[{
                type:String,
                required: true
            }],
            linkProject:[{
                type:String,
                required: true
            }]
            
        });

        return mongoose.model("Projects", userSchema);
    }


}