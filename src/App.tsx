import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
