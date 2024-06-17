import "../StyleSheets/Header.css";
import { Link } from "react-router-dom";
import LinksHeader from "./LinksHeader";

const Header: React.FC = () => {

  return (
    // Header de la pagina
    <nav className="nav">
      <div className="containerNav">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          Navbar
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
        {/* Boton de despliege, cuando sea una pantalla mas pequeña */}
        <button
          className="navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Lista de enlaces */}
        <LinksHeader size={'desktop'}/>
      </div>
      <LinksHeader size={'mobile'}/>
    </nav>
  );
};

export default Header;
