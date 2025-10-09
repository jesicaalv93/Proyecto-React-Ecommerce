import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/Home";
import CategoriesListContainer from "./components/categories-list-container/CategoriesListContainer";
import ProductsListContainer from "./components/products-list-container/ProductsListContainer";
import ProductDetail from "./components/product-detail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
<Route path="/product/:productId" element={<ProductDetail />} />

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesListContainer />} />
        <Route path="/category/:categoryId" element={<ProductsListContainer />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;