import { usePrismicDocumentsByType } from "@prismicio/react";
import { Post } from "../../components/Post";
import { useCallback, useEffect, useState } from "react";
import { PrismicDocument, Query } from "@prismicio/client";
import styles from "./styles.module.scss";

const PAGE_SIZE = 5;

export const News: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [lastNewsItem, setLastNewsItem] = useState<string>();
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const fetchNews = useCallback(async () => {
    const response = await fetch(
      "https://api-sa-east-1.hygraph.com/v2/clsbmingw2pio01w49t1h6the/master",
      {
        method: "POST",
        headers: {
          authorization: `bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
          query: `
      {
        newsPostsConnection(first: ${PAGE_SIZE}${
            lastNewsItem ? ", after: " + lastNewsItem : ""
          }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          newsPosts:edges {
            node {
              id
              title
              content {
                raw
              }
              coverImage {
                url
              }
            }
          }
        }
      }
    `,
        }),
      }
    );
    const jsonResponse = await response.json();
    console.log({
      asd: jsonResponse.data.newsPostsConnection.newsPosts.map(
        (post: any) => post.node
      ),
    });

    setNews(
      jsonResponse.data.newsPostsConnection.newsPosts.map(
        (post: any) => post.node
      )
    );
    setLastNewsItem(jsonResponse.data.newsPostsConnection.pageInfo.endCursor);
    setHasNextPage(jsonResponse.data.newsPostsConnection.pageInfo.hasNextPage);
  }, [lastNewsItem]);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="page-container stretched gap-10">
      {news?.map((post) => (
        <Post key={post.id} title={post.title} content={post.content.raw} />
      ))}
      {hasNextPage && (
        <button
          className={`self-center ${styles.loadMoreBtn}`}
          onClick={fetchNews}
        >
          Cargar mas noticias
        </button>
      )}
    </section>
  );
};
