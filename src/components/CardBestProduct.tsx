import '../StyleSheets/CardBestProduct.css'

const CardBestProduct = () => {
  return (
    //Carta del producto mas vendido
    <div className='cardBestP'>
      {/* Imagen del producto */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIXmBEJvs0IGNGQGfrgsU0MbPPmCMPTSuVA&s" alt="..."  className='cardBestP__img'/>
      {/* Nombre del producto */}
      <p className='cardBestP__text'>Lorem ipsum, dolor sit amet </p>
    </div>
  )
}

export default CardBestProduct
