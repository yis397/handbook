import mongoose,{ Schema,model,Model } from "mongoose";
import { IUsuario } from "../interfaces/models";
const usuarioSchema=new Schema({
    nombre:{
        type:String,
        require:true
    },
    apellidos:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    avatar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Publicacion'
    },
    password:{
        type:String,
        require:true
    },
    amigos:{
        type:Number,
        default:0
    },
    headImg:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Publicacion'
    }
    
},
{timestamps:true}
);
const Usuario:Model<IUsuario>=mongoose.models.Usuario||model('Usuario',usuarioSchema);
export default Usuario;