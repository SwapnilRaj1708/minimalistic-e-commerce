import { useContext } from "react";
import BannerContext from "../../contexts/BannerContext";

function useBanner() {
  return useContext(BannerContext);
}

export default useBanner;
