import OptionAccount from "./OptionAccount";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props{
    size: string
}

const LinksHeader: React.FC<Props> = ({size}) => {

     // Hooks para manejar si se muestran los modales o no
  const [modalOptions, setModalOptions] = useState<boolean>(false);

  // Funcion para mostrar u ocultar el modal de las opciones de la cuenta
  const handleModalOptions = () => {
    if (modalOptions) {
      setModalOptions(false);
    } else {
      setModalOptions(true);
    }
  };
    // Lista de enlaces
  return (
    <div className={`navbar enlaces-${size}`} id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center lista">
      <li className="nav-item">
        {/* Link que manda a la pagina de categorias */}
        <Link className="nav-link active" to="/categories">
          Categorias
        </Link>
      </li>
      <li className="nav-item">
        {/* Link que manda a la pagina de ayuda */}
        <Link className="nav-link" to="/help">
          Ayuda
        </Link>
      </li>
      <li className="nav-item item__carrito">
        <Link className="nav-link" aria-disabled="true" to="/carShop">
          {/* Icono que manda a la pagina del carrito de compras */}
          <i className="bi bi-cart3"></i>
        </Link>
      </li>
      <li className="nav-item">
        {/* Imagen que despliega las opciones de cuenta */}
        <a
          className="nav-link active"
          aria-current="page"
          href="#"
          onClick={handleModalOptions}
        >
          <img
            className="lista__user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs0c95ju7Jd7fwULRkXi7fyesaSINpAyJlQ&s"
            alt="Imagen de perfil"
          />
        </a>
        {modalOptions ? <OptionAccount /> : null}
      </li>
    </ul>
  </div>
  )
}

export default LinksHeader
