import { useState } from 'react'
import '../StyleSheets/ProductCar.css'

const ProductCar = () => {

    const [minCant, setMinCant] = useState(1)

    const increaseCant = () =>{
        if(minCant == 9){
            alert('Solo puedes comprar un maximo de 9 productos')
        } else {
            setMinCant(minCant + 1)
        }
    }
    const decreaseCant = () =>{
        if(minCant == 1){
            alert('Debes comprar como minimo un producto')
        } else {
            setMinCant(minCant - 1)
        }
    }

  return (
    <>
        <div className='itemProduct'>
          <div className='info grid-container'>
            <p className='info__name m-0'>oidsfnodfsnodfs</p>
            <span className='info__precio'>$19.99</span>
          </div>
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
