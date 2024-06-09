import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import router from "./modules";

const PORT = 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', router);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));