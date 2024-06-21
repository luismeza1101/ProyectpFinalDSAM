import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalPago from "../components/ModalPago";
import ProductCar from "../components/ProductCar";
import "../StyleSheets/CarShoping.css";

// Pagina del carrito de compras
const CarShoping = () => {
  return (
    <>
      <Header />
      <div className="carShop">
        <h3 className="carShop__titulo">Carrito de compras</h3>
        {/* Lista de todos los productos que se añadio */}
        <ul className="listP">
          <ProductCar />
        </ul>
        {/* Formulario para el resumen de todo lo agregado */}
        <ModalPago/>
      </div>
      <Footer />
    </>
  );
};

export default CarShoping;
