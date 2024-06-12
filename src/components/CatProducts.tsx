import '../StyleSheets/CatProducts.css'

const CatProducts = () => {
  return (
    <aside className="listProducts">
      <h6 className="listProducts__titulo">Categorias</h6>
      <ul className="list-group listItems">
        <li className="list-group-item listItem__item">Comedor</li>
        <li className="list-group-item listItem__item">Dormitorio</li>
        <li className="list-group-item listItem__item">Sala</li>
        <li className="list-group-item listItem__item">Terrazas</li>
        <li className="list-group-item listItem__item">Baño</li>
      </ul>
    </aside>
  );
};

export default CatProducts;
