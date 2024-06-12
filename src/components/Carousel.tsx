import "../StyleSheets/Carousel.css";

const Carousel: React.FC = () => {
  return (
    // Carrusel donde se mostraran todas las ofertas que hay en la tienda
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide ofertas"
      data-bs-ride="carousel"
    >
      {/* Contenedor de todas las imagenes */}
      <div className="carousel-inner">
        {/* Item idenpendiente */}
        <div className="carousel-item active">
          {/* Imagen que ira en el carrusel */}
          <img src="./banner1.png" className="d-block w-100 " alt="banner1" />
        </div>

        {/* Item idenpendiente */}
        <div className="carousel-item">
          {/* Imagen que ira en el carrusel */}
          <img src="./banner2.png" className="d-block w-100" alt="banner2" />
        </div>

        {/* Item idenpendiente */}
        <div className="carousel-item">
          {/* Imagen que ira en el carrusel */}
          <img src="./banner3.png" className="d-block w-100" alt="./banner3" />
        </div>
      </div>
      {/* Botones para controlar el carrusel */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
