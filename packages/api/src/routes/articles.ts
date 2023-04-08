import { getDirectories } from "../controllers/articles";
import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
  const directores = getDirectories()
  res.status(200).send(directores);
});

export default router;
