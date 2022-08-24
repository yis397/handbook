import mongoose from 'mongoose';
import { IAmigo } from '../interfaces/models';
const followerSchema=new mongoose.Schema({

    idUser:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Usuario"
    },
    friendId:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario"
    }]
        
},{timestamps:true})

const Follow:mongoose.Model<IAmigo>=mongoose.models.Follow||mongoose.model("Amigo",followerSchema);

export default Follow