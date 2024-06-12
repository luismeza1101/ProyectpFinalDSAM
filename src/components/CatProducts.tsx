import { useState } from 'react';
import '../StyleSheets/CatProducts.css'

const CatProducts = () => {

  const [categoria, setCategoria] = useState('Todos');

  const handleCategoria = (evt: React.MouseEvent<HTMLLIElement>) => {
    const categoriaSeleccionada = (evt.target as HTMLLIElement).textContent;
    if (categoriaSeleccionada) {
      setCategoria(categoriaSeleccionada);
    }
  }
  return (
    // Lista de categorias de los productos
    <aside className="categoriesPro">
      <h4>{categoria}</h4>
      <div className='listProducts'>
        <h6 className="listProducts__titulo">Categorias</h6>
        <ul className="list-group listItems">
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Comedor</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Dormitorio</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Sala</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Terraza</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Baño</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Todos</li>
        </ul>
      </div>
    </aside>
  );
};

export default CatProducts;
