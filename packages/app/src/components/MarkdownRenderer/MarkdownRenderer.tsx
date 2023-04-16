import { useEffect, useState } from "react";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify/lib";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import generateId from "uuid-by-string";
import "./markdown-renderer.css";

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  const [items, setItems] = useState<string | null>(null);

  useEffect(() => {
    if (!markdownContent) return;
    const processor = unified()
      .use(remarkParse)
      .use(remarkMath, { singleDollarTextMath: true })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeStringify);
    const tree = processor.parse(markdownContent);
    const hastTree = processor.runSync(tree);
    const toAdd: any[] = [];
    hastTree?.children.forEach((e, i) => {
      //@ts-ignore
      if (e.tagName === "h1" || e.tagName === "h2") {
        //@ts-ignore
        toAdd.push({
          index: i,
          value: {
            type: "element",
            tagName: "span",
            properties: {
              class: "anchor",
              //@ts-ignore
              id: generateId(e.children[0].value)
            }
          }
        });
      }
    });
    toAdd.forEach((e) => {
      hastTree.children.splice(e.index, 0, e.value);
    });
    //@ts-ignore
    setItems(processor.stringify(hastTree));
  }, [markdownContent]);
  return (
    <>
      {items ? (
        <article
          className="markdown-renderer"
          dangerouslySetInnerHTML={{ __html: items }}
        ></article>
      ) : null}
    </>
  );
};

export default MarkdownRenderer;
