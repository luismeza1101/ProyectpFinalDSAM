import '../StyleSheets/MisionVision.css'

const MisionVision = () => {
    // Seccion de mision y mision de la empresa
  return (
    <section className="container objetivos">
      <div className="vision">
        <h4>Nuestra vision</h4>
        <i className="bi bi-building-fill-up icon"></i>
        <p>Ser líderes en el mercado de muebles de alta calidad, ofreciendo diseños innovadores y duraderos que transformen los hogares de nuestros clientes.</p>
      </div>
      <div className="mision">
        <h4>Nuestra mision</h4>
        <i className="bi bi-bar-chart-fill icon"></i>
        <p>Ofrecer muebles de diseño y alta calidad a precios asequibles, mejorando los hogares de nuestros clientes y brindando una experiencia de compra excepcional.</p>
      </div>
    </section>
  )
}

export default MisionVision
