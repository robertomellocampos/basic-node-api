import mongoose, { Schema } from 'mongoose';

var PokemonSchema = new Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    imagem: { type: String, required: true },
});

export default mongoose.model('Pokemon', PokemonSchema);
