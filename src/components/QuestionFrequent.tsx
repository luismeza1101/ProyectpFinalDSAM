interface Props {
    index : string
    pregunta: string
    respuesta: string
}

const QuestionFrequent: React.FC<Props> = ({index, pregunta, respuesta}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
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

