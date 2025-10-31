import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header";
import CategoriesListContainer from "./components/categories-list-container/CategoriesListContainer";
import ProductsListContainer from "./components/products-list-container/ProductsListContainer";
import ProductDetail from "./components/product-detail/ProductDetail";
import CartPage from "./components/cart/CartPage";
import Checkout from "./components/cart/Checkout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

