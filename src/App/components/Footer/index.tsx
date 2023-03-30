import styles from './styles.module.scss';
import techRuleset from '../../../assets/reg_t.png';
import sportRuleset from '../../../assets/reg_d.png';
import naCarreraLogo from '../../../assets/na_carrera.jpg';
import emailIcon from '../../../assets/mail.png';
import racLogo from '../../../assets/rac_logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox}>
        <h4 className="title-3">Reglamento 2023</h4>
        <button><img src={techRuleset} alt="reglamento tecnico" /></button>
        <button><img src={sportRuleset} alt="reglamento deportivo" /></button>
      </div>
      <div className={styles.footerBox}>
        <h4 className="title-3">1ra Fecha</h4>
        <h4 className="title-3 uppercase">Proximamente</h4>
        {/* <div className={styles.nextRaceWrapper}>
          <p className={styles.nextRaceCircuit}>Autodromo Mouras: Chico</p>
          <h3 className={styles.nextRaceDate}>13-04-2023</h3>
        </div> */}
      </div>
      <div className={styles.footerBox}>
        <a href="">
          <img src={naCarreraLogo} alt="NA Carrera" />
        </a>
        <div className={`row ${styles.contactInfoWrapper}`}>
          <img src={emailIcon} alt="" />
          <a href="mailto:sportprototipo@gmail.com">
            sportprototipo@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.footerBox}>
        <a href="">
          <img src={racLogo} alt="Racing Advanced Course" />
        </a>
      </div>
    </footer>
  );
} 
