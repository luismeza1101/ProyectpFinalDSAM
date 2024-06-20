import { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../StyleSheets/ProductInfo.css'
import { decreaseCant, increaseCant } from '../fuctions'
import { productsMasVendidos } from '../data';
import { Producto } from '../types';

const ProductInfo = () => {

    const [cantidad, setCantidad] = useState(1)
    const { id } = useParams<{ id: string }>();

    const producto: Producto | undefined = productsMasVendidos.find(p => p.id === id);

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
      }

  return (
    <section className="container data">
        <div className="data__imagen">
            <img src={`../../public/${producto.nombre.toLowerCase()}.jpg`} alt={`Imagen de ${producto.nombre}`} />
        </div>
        <div className="info">
            <div className="general">
                <h5 className="general__nombre fs-2">{producto.nombre}</h5>
                <span className="general__id">SKU: {producto.id}</span>
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
