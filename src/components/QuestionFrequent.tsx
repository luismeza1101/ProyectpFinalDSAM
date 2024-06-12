interface Props {
    index : string
    pregunta: string
    respuesta: string
}

const QuestionFrequent: React.FC<Props> = ({index, pregunta, respuesta}) => {
  return (
    // Acordion de preguntas frecuentes
    <div className="accordion-item">
      <h2 className="accordion-header">
        {/* Boton para desplegar el acordeon */}
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          {/* Contenido de la pregunta */}
          {pregunta}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {respuesta}
        </div>
      </div>
    </div>
  );
};

export default QuestionFrequent;

