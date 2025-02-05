import express from "express";
import { config } from "dotenv";
import { routes } from "./routes/routes";
import path from "path";
import cors from "cors";

config();

const app = express();

app.use(express.json());
app.use("/files", express.static(path.resolve("uploads")));
app.use(cors());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
