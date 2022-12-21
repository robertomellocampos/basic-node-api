export function getTipos() {
    return ["Steel", "Eletric", "Water"];
}

export function getMeusPokemons() {
    return {
        nome: "Pikachu",
        tipo: "Eletrico"
    },
    {
        nome: "Squirtle",
        tipo: "Aquatico"
    };
}

export function salvarPokemon(pokemon) {
    console.log(pokemon);
    return "Esse método ainda será implementado com o salvamento do pokemon no banco de dados";
}