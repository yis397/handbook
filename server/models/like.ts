import mongoose from 'mongoose'
import { ILike } from '../interfaces/models';

const schemaLike=new mongoose.Schema({
    idPublicacion:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'Publicacion'
    },
    idUser:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'Usuario',
    },

},{timestamps:true});
const Like:mongoose.Model<ILike>=mongoose.models.Like||mongoose.model('Like',schemaLike)
export default Like;