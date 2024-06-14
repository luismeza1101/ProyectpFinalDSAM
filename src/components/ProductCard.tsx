import '../StyleSheets/ProductCard.css'

const ProductCard = () => {
  return (
    // Carta que contiene cada producto en individual
    <div className="card productCard">
      {/* Imagen del producto */}
      <img src="https://oechsle.vteximg.com.br/arquivos/ids/2308210-1000-1000/image-7d1ef0beb80341e8a98308f86a6e41b8.jpg?v=637492960566530000" className="card-img-top productCard__img" alt="Imagen del producto" />
      <div className="card-body">
        {/* Nombre del producto */}
        <h5 className="card-title">Cdfdsjnosd</h5>
        {/* Precio */}
        <p className="card-text price">$200.50</p>
        {/* Boton de añadir al carrito */}
        <a href="#" className="btn btn-dark">
          Añadir al carrito
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
