import { useContext } from "react";
import SideNavbarContext from "../contexts/SideNavbarContext";

function useSideNavbar() {
  return useContext(SideNavbarContext);
}

export default useSideNavbar;
