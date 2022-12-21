import express from 'express';
import addControllers from "./setup/addControllers";
import addMiddlewares from "./setup/addMiddlewares";

const app_express = express();

addMiddlewares(app_express); // DEVE SER ADICIONANDO ANTES DOS CONTROLLERS
addControllers(app_express);

app_express.listen(3000, () => {
    console.log("A API ESTÁ RODANDO NA PORTA 3000");
});


