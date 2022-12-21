import { getTipos, getMeusPokemons, salvarPokemon } from "../services/pokemonService";

export default (app) => {
    app.get("/tipos", (req, res) => {
        var tipos = getTipos();
        res.json(tipos);
    });

    app.post("/pokemon", (req, res) => {
        var pokemonSalvo = salvarPokemon(req.body);
        res.json(pokemonSalvo);
    });

    app.get("/meuspokemons", (req, res) => {
        var meusPokemons = getMeusPokemons();
        res.json(meusPokemons);
    });
}