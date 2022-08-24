import mongoose from "mongoose";
import { IComentario } from "../interfaces/models";

const schemaComentarios=new mongoose.Schema({
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
    comentario:{
        type:String,
        require:true,
    },

},{timestamps:true});

const Comentario:mongoose.Model<IComentario>=mongoose.models.Comentario||mongoose.model('Comentario',schemaComentarios)
export default Comentario