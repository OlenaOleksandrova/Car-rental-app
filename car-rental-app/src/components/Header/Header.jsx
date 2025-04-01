import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
// import clsx from "clsx";
// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        Rental<span className={s.span}>Car</span>{" "}
      </div>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={s.link}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
