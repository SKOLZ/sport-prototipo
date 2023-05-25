import styles from "./styles.module.scss";

export const Photos: React.FC = () => {
  return (
    <section className="page-container">
      <p className={styles.photosUnavailableText}>Fotos no disponibles temporalmente</p>
    </section>
  );
}
