import homeBanner from "../../../assets/home_banner.jpg";
import { Table } from "../../components/Table";
import styles from "./styles.module.scss";
import { championship } from "../../../data/currentChampionshipData";
import { teamChampionship } from "../../../data/currentTeamChampionshipData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { usePrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [posts] = usePrismicDocumentsByType("news_post", {
    pageSize: 5,
    page: 1,
    orderings: {
      field: "last_publication_date",
      direction: "desc",
    },
  });
  console.log(posts);

  return (
    <section className="page-container row top gap-4">
      <div className="column item-2 gap-4">
        <img className={styles.homeBanner} src={homeBanner} />
        <Carousel
          autoPlay
          interval={10000}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop
        >
          {posts?.results.map((post) => (
            <Link
              key={post.id}
              className={styles.carouselLink}
              to={`/news/post?post_id=${post.id}`}
            >
              <img src={post.data.post_featured_image.url} />
              <div className="legend">
                <h4 className={styles.carouselSlideTitle}>
                  {post.data.title[0].text}
                </h4>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className="column item-1 gap-4">
        <Table
          className={styles.calendarTable}
          headers={["Puesto", "Piloto", "Puntos"]}
          elements={championship}
        />
        {/* <Table className={styles.calendarTable} headers={["Puesto", "Equipo", "Puntos"]} elements={teamChampionship} /> */}
      </div>
    </section>
  );
};
