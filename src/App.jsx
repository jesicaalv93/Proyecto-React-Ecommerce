import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<h2 className="text-center my-5">Categorías</h2>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;