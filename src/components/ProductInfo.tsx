import { useState } from 'react'
import '../StyleSheets/ProductInfo.css'
import { decreaseCant, increaseCant } from '../fuctions'

const ProductInfo = () => {

    const [cantidad, setCantidad] = useState(1)

  return (
    <section className="container data">
        <div className="data__imagen">
            <img src="https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/704/PMP00001558789/full_image-1.jpg" alt="" />
        </div>
        <div className="info">
            <div className="general">
                <h5 className="general__nombre fs-2">Nombre del producto</h5>
                <span className="general__id">SKU: 658790'</span>
            </div>
            <div className="precios">
                <table className="precios__tabla">
                    <tr>
                        <td>Normal</td>
                        <td>$2399</td>
                    </tr>
                    <tr>
                        <td>Descuento</td>
                        <td>40%</td>
                    </tr>
                    <tr>
                        <th>Precio Final</th>
                        <th>$1800</th>
                    </tr>
                </table>
            </div>
            <div className="cantidad">
                <button type= 'button' className="btn cantidad__modificar" onClick={() => decreaseCant(cantidad,setCantidad)}>-</button>
                {cantidad}
                <button type= 'button' className="btn cantidad__modificar" onClick={() => increaseCant(cantidad,setCantidad)}>+</button>
                <button type= 'button' className="btn btn-dark cantidad__agregar">Agregar al carrito</button>
            </div>
        </div>
    </section>
  )
}

export default ProductInfo
