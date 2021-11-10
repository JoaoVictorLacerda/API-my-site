import mongoose from "mongoose";
export class SobreMim{

    public mongoModel(){
        const userSchema = new mongoose.Schema({
            _id:{
                type:String,
                required: true
            },
            about:[{
                type:String,
                required: true
            }],
            imgs:[{
                type: String,
                required: false,
            }]
        });

        return mongoose.model("SobreMim", userSchema);
    }


}