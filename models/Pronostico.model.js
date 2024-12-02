import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const PronosticoSchema = new Schema({
  humedad: {
    type: String,
    required: true,
  },
  temperatura: {
    type: String,
    required: true,
  },
  presion: {
    type: String,
    required: true,
  },
  luz: {
    type: String,
    required: true,
  },
  lluvia: {
    type: String,
    required: true,
  },
  dia: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default Mongoose.model("Pronostico", PronosticoSchema);
