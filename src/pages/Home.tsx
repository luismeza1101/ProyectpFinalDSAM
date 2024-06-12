import BestProducts from "../components/BestProducts"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from "../components/Header"

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
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home
