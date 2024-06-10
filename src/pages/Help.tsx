import { preguntasFrecuentes } from "../data";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import QuestionFrequent from "../components/QuestionFrequent";

const Help: React.FC = () => {

  return (
    <>
      <Header />
      <section className="container mt-5">
        <h5>Preguntas Frecuentes</h5>
        <div className="accordion" id="accordionExample">
          {preguntasFrecuentes.map(pregunta => (
            <QuestionFrequent index={pregunta.index} pregunta={pregunta.pregunta} respuesta={pregunta.respuesta}/>
          ))}
        </div>
      </section>
      <FormContact/>
      <Footer/>
    </>
  );
};

export default Help;
