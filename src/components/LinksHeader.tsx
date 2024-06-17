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
    <div className={`enlaces enlaces-${size}`} id="navbarSupportedContent">
    <ul className="lista">
      <li className="lista__item">
        {/* Link que manda a la pagina de categorias */}
        <Link className="lista__link" to="/categories">
          Categorias
        </Link>
      </li>
      <li className="lista__item">
        {/* Link que manda a la pagina de ayuda */}
        <Link className="lista__link" to="/help">
          Ayuda
        </Link>
      </li>
      <li className="lista__item item__carrito">
        <Link className="lista__link" aria-disabled="true" to="/carShop">
          {/* Icono que manda a la pagina del carrito de compras */}
          <i className="bi bi-cart3"></i>
        </Link>
      </li>
      <li className="lista__item lista__item--account">
        {/* Imagen que despliega las opciones de cuenta */}
        <span className="lista__link lista__link--account" onClick={() => handleModalOptions()}>
          <img
            className="lista__user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs0c95ju7Jd7fwULRkXi7fyesaSINpAyJlQ&s"
            alt="Imagen de perfil"
          />
        </span>
        {modalOptions ? <OptionAccount /> : null}
      </li>
    </ul>
  </div>
  )
}

export default LinksHeader
