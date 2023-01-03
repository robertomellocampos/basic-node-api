import PokemonModel from "../model/pokemon.model";
import TipoModel from "../model/tipo.model";

export async function getTipos() {
    var tipos = await TipoModel.find().lean();
    console.log(tipos);
    var tiposResult = tipos.map(function (tipo) {
        return tipo.nome;
    })
    return tiposResult;
}

export async function getMeusPokemons() {
    var pokemons = await PokemonModel.find().lean();
    return pokemons;
}

export async function salvarPokemon(pokemon) {
    var createdPokemon = new PokemonModel(pokemon);
    await createdPokemon.save();
    console.log(pokemon);
    return "Salvou com sucesso";
}