import express from "express";
import { getDirectories } from "../controllers/articles";

const router = express.Router();

router.get("/", (_, res) => {
  const directories = getDirectories();
  res.status(200).send(directories);
});

export default router;
