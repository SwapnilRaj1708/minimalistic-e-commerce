import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

function useProducts() {
  return useContext(ProductsContext);
}

export default useProducts;
