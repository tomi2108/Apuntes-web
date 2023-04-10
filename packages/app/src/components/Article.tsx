import "katex/dist/katex.min.css";
import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";
import TableOfContents from "./TableOfContents/TableOfContents";

type ArticleProps = {
  markdownContent: string;
};

const Article = ({ markdownContent }: ArticleProps) => {
  return (
    <>
      <div>
        <TableOfContents markdownContent={markdownContent} />
      </div>
      <div>
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </>
  );
};

export default Article;
