import { useContext } from "react";
import CategoryContext from "../contexts/CategoryContext";

function useCategory() {
  return useContext(CategoryContext);
}

export default useCategory;
