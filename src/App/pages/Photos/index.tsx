import { useEffect } from "react";
import styles from "./styles.module.scss";

export const Photos: React.FC = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api-sa-east-1.hygraph.com/v2/clsbmingw2pio01w49t1h6the/master",
      {
        method: "POST",
        headers: {
          authorization: `bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`
        },
        body: JSON.stringify({query: `
        {
          assets(after: "clsbmjynt6bw50blu3qi3hxr5", first :2) {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
          }
        }
      `})
      });
      const asd = await response.json();
      console.log(asd);
    };

    fetchProducts();
  }, []);
  return (
    <section className="page-container">
      <p className={styles.photosUnavailableText}>Fotos no disponibles temporalmente</p>
    </section>
  );
}
