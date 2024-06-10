import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
