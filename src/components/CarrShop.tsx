import ProductCar from "./ProductCar"
import '../StyleSheets/CarShop.css'

const CarrShop = () => {
  return (
    // Modal de carrito de compras que se mostrara
    <section className="car">
        <h5 className="car__titulo">Carrito de compras</h5>
        {/* Contenedor de cada producto que se añadio al carrito de compra */}
        <div className="carLista">
            <ProductCar/>
            <ProductCar/>
            <ProductCar/>
            <ProductCar/>
        </div>
        {/* Monto total a pagar */}
        <p>TOTAL : $898</p>
        {/* Boton para ir a la pagina para pagar la compra */}
        <button className="btn btn-dark">Realizar compra</button>
    </section>
  )
}

export default CarrShop
