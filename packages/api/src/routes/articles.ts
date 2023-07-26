import express, { Router } from "express";
import { getDirectories } from "../controllers/articles";

const router: Router = express.Router();

router.get("/", async (_, res) => {
  const directories = getDirectories();
  res.status(200).send(directories);
});

export default router;
