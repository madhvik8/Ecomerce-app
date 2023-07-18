import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Index";
import Home from "./modulus/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modulus/Product";
import Products from "./modulus/Products";
import CategotyProducts from "./modulus/CategoryProducts";
import Cart from "./modulus/Cart/Index";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategotyProducts/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="*" element={<div>404</div>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
