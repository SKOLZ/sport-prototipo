import { NavLink, NavLinkProps } from "react-router-dom";
import styles from './styles.module.scss';
import Logo from '../../../assets/logo_sp.svg';

export const Header: React.FC = () => {
  const navClassName = ({ isActive }: {isActive: boolean}) => `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav className={styles.navbar}>
        <NavLink  className={navClassName} to="/">Home</NavLink>
        <NavLink className={navClassName} to="/history">Historia</NavLink>
        <NavLink className={navClassName} to="/news">Novedades</NavLink>
        <NavLink className={navClassName} to="/calendar">Calendario</NavLink>
        <NavLink className={navClassName} to="/ranking">Ranking</NavLink>
        <NavLink className={navClassName} to="/photos">Fotos</NavLink>
        <NavLink className={navClassName} to="/videos">Videos</NavLink>
      </nav>
    </header>
  );
} 
