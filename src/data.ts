import { Preguntas } from "./types";


//Para agregar mas preguntas el objeto debe tener un index, que sera su numero de orden en ingles, la pregunta y la respuesta en ese orden
export const preguntasFrecuentes: Preguntas[] = [
  {
    index: "One",
    pregunta: "¿Cómo puedo realizar un pedido?",
    respuesta:
      "Para realizar un pedido, simplemente navega por nuestro catálogo en línea y agrega los productos que deseas a tu carrito. Luego, completa el proceso de compra proporcionando tu información de envío y pago.",
  },
  {
    index: "Two",
    pregunta: "¿Cuál es el tiempo de entrega",
    respuesta:
      "El tiempo de entrega puede variar según tu ubicación y el método de envío seleccionado. Por lo general, los pedidos se entregan en un plazo de 3 a 5 días hábiles. Si necesitas una entrega más rápida, puedes seleccionar un servicio de envío express.",
  },
  {
    index: "Three",
    pregunta: "¿Cómo puedo hacer un seguimiento del pedido?",
    respuesta:
      "Puedes hacer un seguimiento de tu pedido iniciando sesión en tu cuenta en nuestro sitio web. Allí encontrarás información sobre el estado de tu envío, incluyendo la fecha de entrega estimada.",
  },
  {
    index: "Four",
    pregunta: "¿Cuál es la politica de devoluciones",
    respuesta:
      "Aceptamos devoluciones de productos dentro de los 30 días posteriores a la compra. Los artículos deben estar en perfecto estado y con su empaque original. Puedes solicitar una devolución a través de tu cuenta en línea o contactando a nuestro equipo de atención al cliente.",
  },
];
