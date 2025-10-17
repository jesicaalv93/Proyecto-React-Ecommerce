import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/Home";
import CategoriesListContainer from "./components/categories-list-container/CategoriesListContainer";
import ProductsListContainer from "./components/products-list-container/ProductsListContainer";
import ProductDetail from "./components/product-detail/ProductDetail";
import CartPage from "./components/cart/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { CartProvider } from "./components/context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesListContainer />} />
          <Route path="/category/:categoryId" element={<ProductsListContainer />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

