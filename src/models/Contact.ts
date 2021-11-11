import mongoose from "mongoose";
export class Contact{

    public mongoModel(){
        const userSchema = new mongoose.Schema({
            _id:{
                type:String,
                required: true
            },
            nameOrEmail:{
                type:String,
                required: false
            },
            message:{
                type:String,
                required: true
            }
            
        });

        return mongoose.model("Contact", userSchema);
    }


}