import { useState } from 'react'
import '../StyleSheets/ProductCar.css'
import { decreaseCant, increaseCant } from '../fuctions'

const ProductCar = () => {

    // Hook para manejar la cantidad de productos que puede comprar una persona
    const [minCant, setMinCant] = useState(1)



  return (
    <>
    {/* Sección donde estaran los productos añadidos al carrito */}
        <div className='itemProduct'>
          {/* Datos del producto */}
          <div className='info grid-container'>
            {/* Nombre del producto */}
            <p className='info__name m-0'>oidsfnodfsnodfs</p>
            {/* Cantidad del producto */}
            <span className='info__precio'>$19.99</span>
          </div>
          {/* Botones para calcular la cantidad y eliminar un producto */}
          <div className='actuDatos'>
            <button className="btn btn-secondary" onClick={() =>decreaseCant(minCant, setMinCant)}>-</button>
            <p className='actuDatos__cant m-auto'>{minCant}</p>
            <button className="btn btn-secondary" onClick={() =>increaseCant(minCant, setMinCant)}>+</button>
            <button type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>
        <hr />
    </>
  )
}

export default ProductCar
