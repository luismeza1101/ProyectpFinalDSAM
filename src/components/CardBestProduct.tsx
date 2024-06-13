import '../StyleSheets/CardBestProduct.css'
interface CardBestProductProps {
  title: string;
  image: string;
}
const CardBestProduct: React.FC<CardBestProductProps> = (props) =>{
  return (
    //Carta del producto mas vendido
    <div className='cardBestP'>
      {/* Imagen del producto */}
      <img src= {props.image} alt="..."  className='cardBestP__img'/>
      {/* Nombre del producto */}
      <p className='cardBestP__text'> {props.title} </p>
    </div>
  )
}

export default CardBestProduct
