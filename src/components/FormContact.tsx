import '../StyleSheets/FormContact.css'

const FormContact = () => {
  return (
    // Formulario donde el usuario podra mandar sus quejas o dudas
    <form className="form">
      <h3 className="form__titulo">Contactanos</h3>
      <span className="form__info">
        Si no encontraste la respuesta que buscabas, déjanos un mensaje y nos
        comunicaremos contigo a la brevedad
      </span>
      {/* Seccion donde estan los campos de nombre y correo electronico */}
      <div className="datosP">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese su correo electronico"
          />
        </div>
      </div>
      {/* Sección donde se escribira el asunto del contacto del cliente */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Asunto</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Escriba el asunto de su consulta"
        />
      </div>
      {/* Seccion para describir lo que el cliente esta experimentando */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Escriba su mensaje"></textarea>
      </div>
      <button type="submit" className="btn btn-dark">Enviar</button>
    </form>
  );
};

export default FormContact;
