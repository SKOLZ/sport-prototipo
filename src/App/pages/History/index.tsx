import styles from "./styles.module.scss";
import historyTextImage from "../../../assets/history-SPORT.jpg";

export const History: React.FC = () => {
  return (
    <section className="page-container">
      <img
        className={styles.storyImage}
        src={historyTextImage}
        alt="texto acerca de la historia del sport prototipo"
      />
    </section>
  );
};
