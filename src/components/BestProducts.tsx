import '../StyleSheets/BestProducts.css'
import CardBestProduct from './CardBestProduct';

const BestProducts = () => {
  return (
    //Contenedor de los productos mas vendidos de la tienda
    <div className='section'>
    <h2>Lo mas vendido</h2>
        <section className='bestProducts'>
          {/* Cartas de los productos mas vendidos */}
            <CardBestProduct title ='SALA' image='./sala.jpg'/>
            <CardBestProduct title ='DORMITORIO' image='./dormitorio.jpg'/>
            <CardBestProduct title ='ARMARIOS' image='./roperos.jpg'/>
            <CardBestProduct title ='COCINA' image='./cocina.jpg'/>
        </section>
    </div>
  );
};

export default BestProducts;
