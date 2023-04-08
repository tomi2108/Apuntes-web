import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [articles,setArticles] = useState([])

  const fetchArticles = async ()=>{
    return await axios.get("/api/articles")
  }

  useEffect(() => {
    fetchArticles().then(res=>{
      setArticles(res.data)
    })
  },[])

  return (
    <div className="App">
      {
        articles? articles.map(a=>{
          return (
            <div>
              {
                //@ts-ignore
                a.files[0].title
              }
            </div>
          )
        }): ''
      }
    </div>
  )
}

export default App
