import { Link } from 'react-router-dom';
import '../StyleSheets/CardBestProduct.css'
interface CardBestProductProps {
  title: string;
  image: string;
  id: string
}
const CardBestProduct: React.FC<CardBestProductProps> = ({image,title, id}) =>{
  return (
    //Carta del producto mas vendido
    <Link className='cardBestP' to={`/product/${id}`}>
      {/* Imagen del producto */}
      <img src= {image} alt="..."  className='cardBestP__img'/>
      {/* Nombre del producto */}
      <p className='cardBestP__text'> {title} </p>
    </Link>
  )
}

export default CardBestProduct
