import '../StyleSheets/SectionEco.css'

const SectionEco = () => {
  return (
    <section className="eco">
      <div className="eco__image">
        <img src="../../public/Ecologico.jpeg" alt="" />
      </div>
      <div className="eco__info">
        <h4>En Luban, creamos muebles sostenibles con materiales ecológicos y procesos amigables con el medio ambiente.</h4>
        <div className="actions">
            <p><i className="bi bi-tree-fill"></i>Materiales Sostenibles</p>
            <p><i className="bi bi-recycle"></i>Reciclaje y Reutilización</p>
            <p><i className="bi bi-recycle"></i>Procesos Ecológicos</p>
            <p><i className="bi bi-patch-check-fill"></i>Certificaciones verdes</p>
        </div>
      </div>
    </section>
  )
}

export default SectionEco
