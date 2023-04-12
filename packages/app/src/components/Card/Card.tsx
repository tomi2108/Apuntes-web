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

const isSvg = (icon: string): boolean => {
  return icon.includes("svg");
};

const Card = ({ text, onClick, icon }: CardProps) => {
  const [iconString, setIconString] = useState<string>();

  useEffect(() => {
    if (isSvg(icon)) return setIconString(icon);
    const processor = unified()
      .use(remarkParse)
      .use(remarkMath, { singleDollarTextMath: true })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeStringify);
    const tree = processor.parse(icon);
    const hastTree = processor.runSync(tree);
    //@ts-ignore
    setIconString(processor.stringify(hastTree));
  }, [icon]);

  console.log({ icon, iconString });

  return (
    <div className="card" onClick={() => onClick(text)}>
      {isSvg(icon) ? (
        <div
          className="card-image svg-image"
          dangerouslySetInnerHTML={{ __html: iconString ? iconString : "" }}
        >
          {/*  <img
            src={`data:image/svg+xml;charset=utf-8,${
              iconString ? iconString : ""
            }`}
          /> */}
        </div>
      ) : (
        <div
          className="card-image"
          dangerouslySetInnerHTML={{ __html: iconString ? iconString : "" }}
        ></div>
      )}
      <div className="card-name">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
