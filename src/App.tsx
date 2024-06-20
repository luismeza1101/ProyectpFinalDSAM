import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CarShoping from "./pages/CarShoping";
import DataProductos from "./pages/DataProductos";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/carShop" element={<CarShoping />} />
        <Route path="/product/:id" element={<DataProductos />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
