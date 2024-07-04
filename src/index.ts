import express, { Express, urlencoded, json } from "express";
import helmet from "helmet";
import router from "./modules";
import { logRequestMethod } from "./middleware";
import { error, notFound } from "@middleware/error";

const PORT = 3001;
const app: Express = express();

app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());

// apply middlewares
app.use(logRequestMethod);

app.use('/v1', router);

app.use(notFound);
app.use(error);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));