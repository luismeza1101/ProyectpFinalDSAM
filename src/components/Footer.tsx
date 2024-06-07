import "../StyleSheets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid footer__grid--empresa">
        <h4 className="empresa__nombre">Nombre empresa</h4>
        <p className="empresa__info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          iste, iure porro nisi sapiente soluta, ipsam praesentium officiis
          nulla, consequuntur ut culpa quia consectetur tempora odio. Modi
          laborum aperiam et?
        </p>
      </div>
      <div className="footer__grid footer__grid--redes">
        <h4 className="redes__titulo">Nuestras redes </h4>
        <div className="redes__rrss">
          <i className="bi bi-facebook redes__icon"></i>
          <i className="bi bi-instagram redes__icon"></i>
        </div>
      </div>
      <div className="footer__grid footer__grid--links">
        <h4 className="links__titulo">Links</h4>
        <ul className="links__lista">
          <li className="links__item">
            <a href="">Inicio</a>
          </li>
          <li className="links__item">
            <a href="">Nosotros</a>
          </li>
          <li className="links__item">
            <a href="">Contactanos</a>
          </li>
          <li className="links__item">
            <a href="">Servicios</a>
          </li>
        </ul>
      </div>
      <hr className="footer__linea"/>
      <span className="footer__descripcion">&copy; Luis Meza Corilla</span>
    </footer>
  );
};

export default Footer;
