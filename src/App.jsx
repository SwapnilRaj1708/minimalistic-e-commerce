import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SideNavbar from "./components/Navbar/SideNavbar";
import Footer from "./components/Footer/Footer";
import CategorisedProducts from "./components/CategoriedProducts/CategorisedProducts";
import { SideNavbarProvider } from "./contexts/SideNavbarContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { BannerContextProvider } from "./contexts/BannerContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import { CartContextProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  const changeMode = () => {
    const root = document.getElementById("root");
    root.className =
      root.className === "light-mode" ? "dark-mode" : "light-mode";
  };

  return (
    <>
      <SideNavbarProvider>
        <ProductsProvider>
          <BannerContextProvider>
            <CategoryContextProvider>
              <CartContextProvider>
                <>
                  <>
                    <Navbar />
                    <SideNavbar />
                  </>
                  <div className="main">
                    <Routes>
                      <Route index element={<HomePage />} />
                      <Route path="/" element={<HomePage />} />
                      <Route path="/categories" element={<CategoriesPage />}>
                        <Route index element={<CategorisedProducts />} />
                        <Route path=":id" element={<CategorisedProducts />} />
                      </Route>
                      <Route path="/product/:id" element={<ProductsPage />} />
                    </Routes>
                  </div>
                </>
              </CartContextProvider>
            </CategoryContextProvider>
          </BannerContextProvider>
        </ProductsProvider>
      </SideNavbarProvider>
      <Footer />
    </>
  );
}

export default App;
