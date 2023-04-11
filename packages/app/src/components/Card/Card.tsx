import { useEffect, useState } from "react";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify/lib";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype/lib";
import { unified } from "unified";
import "./card.css";

type CardProps = {
  text: string;
  icon: string;
  onClick: (folder: string) => void;
};

const Card = ({ text, onClick, icon }: CardProps) => {
  const [iconSvg, setIconSvg] = useState();

  console.log(iconSvg);
  useEffect(() => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkMath, { singleDollarTextMath: true })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeStringify);
    const tree = processor.parse(icon);
    const hastTree = processor.runSync(tree);
    //@ts-ignore
    setIconSvg(processor.stringify(hastTree));
  }, [icon]);

  return (
    <div className="card" onClick={() => onClick(text)}>
      <div
        className="card-image"
        dangerouslySetInnerHTML={{ __html: iconSvg ? iconSvg : "" }}
      ></div>
      <div className="card-name">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
