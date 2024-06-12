import '../StyleSheets/BestProducts.css'
import CardBestProduct from './CardBestProduct';

const BestProducts = () => {
  return (
    //Contenedor de los productos mas vendidos de la tienda
    <div className='section'>
    <h2>Lo mas vendido</h2>
        <section className='bestProducts'>
          {/* Cartas de los productos mas vendidos */}
            <CardBestProduct />
            <CardBestProduct />
            <CardBestProduct />
            <CardBestProduct />
        </section>
    </div>
  );
};

export default BestProducts;
