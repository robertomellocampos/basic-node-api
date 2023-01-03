import { getTipos, getMeusPokemons, salvarPokemon } from "../services/pokemonService";
import { connect, disconnect } from '../services/connectionService';

export default function (app) {
    app.get("/tipos", async (req, res) => {
         try {
            await connect();

            var tipos = await getTipos();
            res.json(tipos);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreuum erro na listagem de tipos');
        } finally {

            disconnect();
        }
    });

    app.post("/pokemon", async (req, res) => {

        try {
            await connect();

            var pokemonSalvo = await salvarPokemon(req.body);
            res.json(pokemonSalvo);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreuum erro na criacao do pokemon');
        } finally {
            disconnect();
        }
    });

    app.get("/meuspokemons", async (req, res) => {

        try {
            await connect();

            var tipos = await getMeusPokemons();
            res.json(tipos);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreuum erro na listagem de pokemon');
        } finally {
            disconnect();
        }
    });

}
