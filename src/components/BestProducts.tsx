import '../StyleSheets/BestProducts.css'
import { productsMasVendidos } from '../data';
import CardBestProduct from './CardBestProduct';

const BestProducts = () => {
  return (
    //Contenedor de los productos mas vendidos de la tienda
    <div className='section'>
    <h2>Lo mas vendido</h2>
        <section className='bestProducts'>
          {/* Cartas de los productos mas vendidos */}
            {productsMasVendidos.map(product => (
              <CardBestProduct key={product.id} title={product.nombre} image={product.imagen} id={product.id}/>
            ))}
        </section>
    </div>
  );
};

export default BestProducts;
