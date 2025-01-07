import express from "express";
import { config } from "dotenv";
import { routes } from "./routes/routes";

config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
