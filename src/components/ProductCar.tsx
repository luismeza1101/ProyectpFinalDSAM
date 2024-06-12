import { useState } from 'react'
import '../StyleSheets/ProductCar.css'

const ProductCar = () => {

    // Hook para manejar la cantidad de productos que puede comprar una persona
    const [minCant, setMinCant] = useState(1)

    // Funcion para aumentar la cantidad de productos
    const increaseCant = () =>{
        if(minCant == 9){
            alert('Solo puedes comprar un maximo de 9 productos')
        } else {
            setMinCant(minCant + 1)
        }
    }
    
    // Funcion para disminuir la cantidad de productos
    const decreaseCant = () =>{
        if(minCant == 1){
            alert('Debes comprar como minimo un producto')
        } else {
            setMinCant(minCant - 1)
        }
    }

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
            <button className="btn btn-secondary" onClick={decreaseCant}>-</button>
            <p className='actuDatos__cant m-auto'>{minCant}</p>
            <button className="btn btn-secondary" onClick={increaseCant}>+</button>
            <button type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i></button>
          </div>
        </div>
        <hr />
    </>
  )
}

export default ProductCar
