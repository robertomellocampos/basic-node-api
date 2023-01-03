import mongoose, { Schema } from 'mongoose';

var PokemonSchema = new Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    pokedex: { type: String },
    imagem: { type: String },
});

export default mongoose.model('Pokemon', PokemonSchema);
