import axios from "axios";
import { host } from "./controller";

const url = `${host}/api/articles`;

const getArticles = async () => {
  const response = await axios.get(url);
  return response.data;
};

export { getArticles };
