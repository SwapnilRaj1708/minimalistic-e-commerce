import { createContext,useState } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      title: "All",
      id: "all",
    },
    {
      title: "Furniture",
      id: "furniture",
    },
    {
      title: "Electronics",
      id: "electronics",
    },
    {
      title: "Lamps",
      id: "lamps",
    },
    {
      title: "Kitchen",
      id: "kitchen",
    },
    {
      title: "Chairs",
      id: "chairs",
    },
    {
      title: "Skin Care",
      id: "skincare",
    },
  ]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContextProvider };
export default CategoryContext;
