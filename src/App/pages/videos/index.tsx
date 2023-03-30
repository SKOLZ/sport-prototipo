import YoutubeEmbed from "./components/YoutubeEmbed";
import { highlightedVideos, regularVideos } from "./data";
import styles from "./styles.module.scss";

export const Videos: React.FC = () => {
  return (
    <section className="page-container">
      <div className={`row wrap ${styles.highlightedVideos}`}>
        {highlightedVideos.map((id) => <YoutubeEmbed embedId={id} width={300} height={197} />)}
      </div>
      <div className={`row wrap center ${styles.regularVideosWrapper}`}>
        {regularVideos.map((id) => <YoutubeEmbed embedId={id} width={320} height={180} />)}
      </div>
    </section>

  );
} 
