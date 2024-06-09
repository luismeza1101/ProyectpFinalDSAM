import ProductCar from "./ProductCar"
import '../StyleSheets/CarShop.css'

const CarrShop = () => {
  return (
    <section className="car">
        <h5 className="car__titulo">Carrito de compras</h5>
        <div className="carLista">
            <ProductCar/>
            <ProductCar/>
            <ProductCar/>
            <ProductCar/>
        </div>
        <p>TOTAL : $898</p>
        <button className="btn btn-dark">Realizar compra</button>
    </section>
  )
}

export default CarrShop
