import { toString } from "hast-util-to-string";
import { toHast } from "mdast-util-to-hast";
import { useEffect, useState } from "react";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import generateId from "uuid-by-string";

const TableOfContents = ({ markdownContent }: { markdownContent: string }) => {
  const [toc, setToc] = useState<Array<{ id: string; title: string }> | null>(
    null
  );

  useEffect(() => {
    if (!markdownContent) return;
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify);

    const tree = processor.parse(markdownContent);

    const tocNodes = tree.children.filter(
      (node) => node.type === "heading" && node.depth <= 2
    );
    const tocItems = tocNodes?.map((item: any) => {
      //@ts-ignore
      const title = toString(toHast(item));
      const id = generateId(title);
      return { title, id };
    });
    setToc(tocItems);
  }, [markdownContent]);
  return (
    <nav>
      <ul>
        {toc
          ? toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default TableOfContents;
