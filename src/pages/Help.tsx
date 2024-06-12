import { preguntasFrecuentes } from "../data";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import QuestionFrequent from "../components/QuestionFrequent";

const Help: React.FC = () => {

  return (
    // Pagina de ayuda
    <>
    {/* Header de la pagina */}
      <Header />
      <section className="container mt-5">
        <h5>Preguntas Frecuentes</h5>
        <div className="accordion" id="accordionExample">
          {/* Iteramos el arreglo que contiene todos los datos para añadir las preguntas frecuentes */}
          {preguntasFrecuentes.map(pregunta => (
            <QuestionFrequent index={pregunta.index} pregunta={pregunta.pregunta} respuesta={pregunta.respuesta}/>
          ))}
        </div>
      </section>
      {/* Formulario para que el usuario mande quejas o consultas */}
      <FormContact/>
      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Help;
