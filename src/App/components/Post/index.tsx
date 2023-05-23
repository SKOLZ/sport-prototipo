import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.scss";
import { RichTextField } from "@prismicio/client";

interface Props {
  title: string;
  content: RichTextField;
}

export const Post: React.FC<Props> = ({title, content}) => {
  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>{title}</h2>
      <PrismicRichText
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
      />
    </div>
  );
}
