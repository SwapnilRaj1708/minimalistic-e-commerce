import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import SideNavbar from "./components/Navbar/SideNavbar";
import { SideNavbarProvider } from "./contexts/SideNavbarContext";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  const changeMode = () => {
    const root = document.getElementById("root");
    root.className =
      root.className === "light-mode" ? "dark-mode" : "light-mode";
  };

  return (
    <>
      <SideNavbarProvider>
        <Navbar />
        <SideNavbar />
      </SideNavbarProvider>
      <ProductsProvider>
        <div className="main">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </ProductsProvider>
    </>
  );
}

export default App;
