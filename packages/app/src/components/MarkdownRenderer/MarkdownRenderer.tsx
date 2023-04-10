import { toHtml } from "hast-util-to-html";
import { toHast } from "mdast-util-to-hast";
import { useEffect, useState } from "react";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import generateId from "uuid-by-string";

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  const [items, setItems] = useState<string | null>(null);

  useEffect(() => {
    if (!markdownContent) return;
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(rehypeKatex)
      .use(remarkRehype)
      .use(rehypeStringify);

    const tree = processor.parse(markdownContent);
    const hastTree = toHast(tree);
    const a = {
      ...hastTree,
      //@ts-ignore
      children: hastTree?.children.map((e) => {
        return e.tagName === "h1" || e.tagName === "h2"
          ? {
              ...e,
              properties: {
                ...e.properties,
                id: generateId(e.children[0].value)
              }
            }
          : e;
      })
    };
    //@ts-ignore
    const html = toHtml(a);

    setItems(html);
  }, [markdownContent]);
  return (
    <>
      {items ? <div dangerouslySetInnerHTML={{ __html: items }}></div> : null}
    </>
  );
};

export default MarkdownRenderer;
