# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Contenido de los componentes

 - BestProducts : Contienen los productos mas vendidos de la pagina principal, es el contenedor de todo el contenido, contiene CardBestProduct

 - CardBestProduct: Es la carta donde se encuentra el producto mas vendido, contiene una imagen del producto y su nombre

 - Carousel: Contiene el carrusel de las imagenes que muestran las ofertas que hay en la tienda, esta en la ventana principal

 - ModalPagos: Modal donde se ve el resumen de todas las cosas que el cliente añadio al carrito de compras, esta en la pagina del carrito

 - Footer: Es el footer de la pagina, contiene los links de las redes sociales y mas

 - FormContact: Es el formulario que se usa para que los clientes puedan escribir sus dudas o quejas que tienen, esta en la pagina de ayuda

 - Header: Es el header de la pagina, contiene el logo de la empresa, una barra de busqueda de productos y las secciones de opciones de cuenta, el carrito y para acceder a la pagina de ayuda y de categorias

 - OptionAccount: Es el modal que se muestra cuando se hace click en la imagen de perfil del usuario, muestra las opciones de la cuenta

 - ProductCar: Son los elementos que hay dentro del carrito de compras, son todos los productos que añadimos

 - QuestionFrequent: Son las preguntas frecuentes que dan respuesta a las dudas comunes de los clientes, esta en la pagina de ayuda

 - MisionVision : Contiene la mision y vision de la empresa

 - ProductInfo: Contiene los datos de cada producto, imagen, precio e informacion adicional

 - InfoAdicionalProduct: contiene la tabla donde ira informacion adicional de cada producto

 # Contenido de las paginas

 - Home: Contiene el Header, Carousel, BestProducts, MisionVision y el Footer

 - Help: Contiene el Header, QuestionFrequent, FormContact, Footer

 - Categories: Contiene Header, Lista de productos, Filtro de productos, Footer
 (EN PROCESO)
 
 - CarShoping: Pagina del carrito de compras que tiene una lista de todos los productos y un resumen de la compra

 - DataProductos: Pagina individual de cada producto, donde se detalla su informacion
 
 # Contenido CSS
 - Cada archivo tiene sus estilos en el archivo css de su mismo nombre