import "../StyleSheets/Header.css";
import { Link } from "react-router-dom";
import LinksHeader from "./LinksHeader";
import { useState } from "react";
import LinksMobile from "./LinksMobile";

const Header: React.FC = () => {

  const [showLinks, setShowLinks] = useState(false)

  return (
    // Header de la pagina
    <nav className="nav">
      <div className="containerNav">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="../public/logo.png" alt="LOGO" className="nav__logo"/>
        </Link>
        {/* Barra de busqueda */}
        <form className="barSearch" role="search">
          <i className="bi bi-search"></i>
          <input
            className="me-2 barSearch__input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        {/* Lista de enlaces */}
        <LinksHeader/>
        {/* Boton de despliege, cuando sea una pantalla mas pequeña */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShowLinks(true)}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
      <LinksMobile size={`${showLinks ? 'showLinks' : ''}`} setShowLinks={setShowLinks}/>
    </nav>
  );
};

export default Header;
