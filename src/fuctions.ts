// Funcion para aumentar la cantidad de productos
export const increaseCant = (minCant: number, setMinCant: React.Dispatch<React.SetStateAction<number>>) => {
  if (minCant == 9) {
    alert("Solo puedes comprar un maximo de 9 productos");
  } else {
    setMinCant(minCant + 1);
  }
};

// Funcion para disminuir la cantidad de productos
export const decreaseCant = (minCant: number, setMinCant: React.Dispatch<React.SetStateAction<number>>) => {
  if (minCant == 1) {
    alert("Debes comprar como minimo un producto");
  } else {
    setMinCant(minCant - 1);
  }
}
