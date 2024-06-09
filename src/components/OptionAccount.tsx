import '../StyleSheets/OptionAccount.css'

const OptionAccount = () => {
  return (
    <article className='cuenta container'>
      <h5 className='cuenta__titulo'>Opciones de cuenta</h5>
      <div className='opciones'>
        <ul className='listaOp'>
          <li className='listaOp__item'>
            <a href="#">
              <i className="bi bi-person"></i>Informacion de la cuenta
            </a>
          </li>
          <li className='listaOp__item'>
            <a href="#">
              <i className="bi bi-person-fill-gear"></i>Editar informacion
            </a>
          </li>
          <li className='listaOp__item'>
            <a href="">
              <i className="bi bi-box-arrow-right"></i>Cerrar sesion
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default OptionAccount;
