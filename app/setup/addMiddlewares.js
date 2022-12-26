import cors from "cors";
import bodyParser from "body-parser";

export default function (app) {

    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });
}


