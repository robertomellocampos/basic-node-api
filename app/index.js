import express from 'express';
import addControllers from "./setup/addControllers";
import addMiddlewares from "./setup/addMiddlewares";

const app = express();

addMiddlewares(app); // DEVE SER ADICIONANDO ANTES DOS CONTROLLERS
addControllers(app);

app.listen(3000, () => {
    console.log("A API ESTÁ RODANDO NA PORTA 3000");
});





