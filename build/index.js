import express from "express";
import { config } from "dotenv";
import { routes } from "./routes/routes";
import path from "path";
config();
const app = express();
app.use(express.json());
app.use("/files", express.static(path.resolve("uploads")));
const port = process.env.PORT || 3000;
app.use(routes);
app.listen(port, () => {
    console.log("Listening on port " + port);
});
