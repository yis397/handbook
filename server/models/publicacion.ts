import mongoose,{Schema,Model,model} from 'mongoose';
import { IPublicacion } from '../interfaces/models';
const publicacionSchema=new Schema({
    descripcion:{
        type:String,
    },
    tipo:{
       type:String,
       enum:{
        values:['publicacion','perfil','head'],
        message:'tipo no valido'
       },
       require:true
    },
    idUser:{
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref:'Usuario'
    },
    file:{
        type:String,
        require:true
    },
    comentarios:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    
},
{
timestamps:true

})
const Publicacion:Model<IPublicacion>=mongoose.models.Publicacion||model('Publicacion',publicacionSchema);
export default Publicacion;