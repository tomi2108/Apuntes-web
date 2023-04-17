import express from "express";
import { getDirectories } from "../controllers/articles";

const router = express.Router();

router.get("/", async (_, res) => {
  const directories = await getDirectories();
  res.status(200).send(directories);
});

export default router;
