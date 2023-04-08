import { useState,useEffect } from 'react';
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

type  ArticleProps = {
  markdownPath : string
}

const Article = ({markdownPath}:ArticleProps) => {
  const [content,setContent] = useState('')
  const importPath = `../assets/markdown/${markdownPath}.md`

  useEffect(() => {

    import(/* @vite-ignore */ importPath)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res));
      })
      .catch((err) => console.error(err));
  },[])


  return (
    <div>
      <ReactMarkdown children={content} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />
    </div>
  );
}


export default Article
