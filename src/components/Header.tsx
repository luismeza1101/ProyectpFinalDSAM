import { useState } from 'react';
import '../StyleSheets/Header.css'
import OptionAccount from './OptionAccount';
import CarrShop from './CarrShop';

const Header: React.FC = () => {

  const [modalOptions, setModalOptions] = useState<boolean>(false);
  const [carShop, setCarShop] = useState<boolean>(false);

  const handleModalOptions = () => {
    modalOptions ? setModalOptions(false) : setModalOptions(true)
  }
  const handleCarShop = () => {
    carShop ? setCarShop(false) : setCarShop(true)
  }
  
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid itemContainer">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        {/* Boton de despliege, cuando sea una pantalla mas pequeña */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
        <div className="navbar enlaces" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center lista">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" onClick={handleCarShop}>
                <i className="bi bi-cart3"></i>
              </a>
              {carShop ? <CarrShop/> : null}
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={handleModalOptions}>
                <img className='lista__user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs0c95ju7Jd7fwULRkXi7fyesaSINpAyJlQ&s" alt="" />
              </a>
              {modalOptions ? <OptionAccount/> : null}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
