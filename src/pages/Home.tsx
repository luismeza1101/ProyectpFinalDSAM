import BestProducts from "../components/BestProducts"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MisionVision from "../components/MisionVision"

const Home = () => {
  return (
    // Pagina principal
    <>
     {/*Header  */}
        <Header/>
        {/* Carrusel de productos en oferta */}
        <Carousel/>
        {/* Sección de los productos mas vendidos */}
        <BestProducts/>
        {/* Mision y vision de la empresa */}
        <MisionVision/>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home
