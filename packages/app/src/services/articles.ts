import axios from "axios"
import {host} from "services/controller"

const url = `${host}/api/articles`

const getArticles = async () => {
   const articles = await axios.get(url)
   return articles
}
