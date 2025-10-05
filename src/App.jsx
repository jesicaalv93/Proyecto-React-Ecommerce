import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/Home";
import CategoriesListContainer from "./components/categories-list-container/CategoriesListContainer";
import ProductsListContainer from "./components/products-list-container/ProductsListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesListContainer />} />
        <Route path="/products:categoryId" element={<ProductsListContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;