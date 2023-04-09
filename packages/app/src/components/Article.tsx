import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

type ArticleProps = {
  markdownContent: string;
};

const Article = ({ markdownContent }: ArticleProps) => {
  return (
    <div>
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
};

export default Article;
