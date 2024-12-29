import styles from "./styles.module.scss";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from "@graphcms/rich-text-types";

interface Props {
  title: string;
  content: RichTextContent;
}

export const Post: React.FC<Props> = ({title, content}) => {
  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>{title}</h2>
      <RichText
        content={content}
        renderers={{
          img: ({src, altText}) => (
            <img
              src={src}
              alt={altText ?? undefined}
              className={styles.postImg}
            />
          )
        }}
      />
      {/* <PrismicRichText
        field={content}
        components={{
          image: ({ node }) => (
            <img
              src={node.url}
              alt={node.alt ?? undefined}
              className={styles.postImg}
            />
          )
        }}
      /> */}
    </div>
  );
}
