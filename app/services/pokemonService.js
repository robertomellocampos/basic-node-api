import PokemonModel from "../model/pokemon.model";

export async function getTipos() {
    return ["Steel", "Eletric", "Water"];
}

export async function getMeusPokemons() {
    var pokemons = await PokemonModel.find().lean();
    console.log(pokemons);
    return pokemons;
}

export async function salvarPokemon(pokemon) {
    var createdPokemon = new PokemonModel(pokemon);
    await createdPokemon.save();
    console.log(pokemon);
    return "Salvou com sucesso";
}