import { createContext, useState } from "react";

const SideNavbarContext = createContext();

function SideNavbarProvider({ children }) {
  const [displaySideNavbar, setDisplaySideNavbar] = useState(false);

  return (
    <SideNavbarContext.Provider
      value={{ displaySideNavbar, setDisplaySideNavbar }}
    >
      {children}
    </SideNavbarContext.Provider>
  );
}

export { SideNavbarProvider };
export default SideNavbarContext;
