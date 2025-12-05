import { NavLink, NavLinkProps } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/logo_sp.svg";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.headerTop}>
        <img src={Logo} className={styles.logo} />
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className={`${styles.navbar} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <NavLink
          className={navClassName}
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className={navClassName}
          to="/history"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Historia
        </NavLink>
        <NavLink
          className={navClassName}
          to="/news"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Novedades
        </NavLink>
        <NavLink
          className={navClassName}
          to="/calendar"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Calendario
        </NavLink>
        <NavLink
          className={navClassName}
          to="/ranking"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Ranking
        </NavLink>
        <NavLink
          className={navClassName}
          to="/champions"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Campeones
        </NavLink>
        <NavLink
          className={navClassName}
          to="/photos"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Fotos
        </NavLink>
        <NavLink
          className={navClassName}
          to="/videos"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Videos
        </NavLink>
      </nav>
    </header>
  );
};
