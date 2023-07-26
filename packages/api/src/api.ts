import cors from "cors";
import express from "express";
import path from "path";

const api: express.Express = express();

import articlesRouter from "./routes/articles";
import { unknownEndpoint } from "./utils/middleware";

api.use(cors());

if (process.env.NODE_ENV === "development") {
  import("morgan")
    .then((morgan) => {
      api.use(morgan.default("tiny"));
    })
    .catch((err) => console.error(err));
}

if (process.env.NODE_ENV === "production") api.use(express.static("dist"));

api.use(express.json());

api.use("/api/articles", articlesRouter);

api.get("/health", (req, res) => res.send("OK"));

api.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

api.use(unknownEndpoint);

export default api;
