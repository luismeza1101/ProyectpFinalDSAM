import CatProducts from "../components/CatProducts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Products"
import '../StyleSheets/Categories.css'

const Categories = () => {
  return (
    <>
        <Header/> 
        <div className="products">
          <CatProducts/>
          <Products/>
        </div>
        <Footer/>
    </>
  )
}

export default Categories
