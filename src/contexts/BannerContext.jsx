import { createContext, useState } from "react";
import banner1 from "../assets/img/banner/banner1.jpg";
import banner2 from "../assets/img/banner/banner2.jpg";

export const BannerContext = createContext();

function BannerContextProvider({ children }) {
  const [banner, setBanner] = useState([
    {
      id: 1,
      title: "Creative harmonious living",
      description:
        "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
      image: banner1,
      button: "SHOP NOW",
      to: "categories/furniture",
    },
    {
      id: 2,
      title: "Comfortable & Elegante Living",
      description:
        "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
      image: banner2,
      button: "SHOP NOW",
      to: "categories/lamps",
    },
  ]);

  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </BannerContext.Provider>
  );
}

export { BannerContextProvider };
export default BannerContext;
