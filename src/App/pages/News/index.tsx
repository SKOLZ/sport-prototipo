import { usePrismicDocumentsByType } from '@prismicio/react'
import { Post } from '../../components/Post';
import { useEffect, useState } from 'react';
import { PrismicDocument, Query } from '@prismicio/client';
import styles from "./styles.module.scss";


export const News: React.FC = () => {
  const [news, setNews] = useState<Array<PrismicDocument<Record<string, any>, string, string>>>([]);
  const [page, setPage] = useState<number>(1);
  const [posts] = usePrismicDocumentsByType('news_post', {
    pageSize: 5,
    page: page,
    orderings: {
      field: 'last_publication_date',
      direction: 'desc'
    }
  })

  useEffect(() => {
    setNews((oldNews) => {
      if (posts) {
        return [...oldNews, ...posts.results];
      }
      return oldNews
    });
  }, [posts]);

  console.log(posts);

  return (
    <section className="page-container stretched gap-10">
      {news?.map((post) => (
        <Post key={post.id} title={post.data.title[0].text} content={post.data.content} />
      ))}
      {posts?.next_page && (<button className={`self-center ${styles.loadMoreBtn}`} onClick={() => setPage(currentPage => currentPage + 1)}>Cargar mas noticias</button>)}
    </section>
  );
} 
