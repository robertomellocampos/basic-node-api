import mongoose, { Schema } from 'mongoose';

var TipoSchema = new Schema({
    nome: { type: String, required: true },
});

export default mongoose.model('Tipo', TipoSchema);
