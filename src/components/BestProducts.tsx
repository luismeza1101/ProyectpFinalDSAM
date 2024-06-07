import '../StyleSheets/BestProducts.css'
import CardBestProduct from './CardBestProduct';

const BestProducts = () => {
  return (
    <div className='section'>
    <h2>Lo mas vendido</h2>
        <section className='bestProducts'>
            <CardBestProduct />
            <CardBestProduct />
            <CardBestProduct />
            <CardBestProduct />
        </section>
    </div>
  );
};

export default BestProducts;
