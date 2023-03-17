import "./App.css";

function App() {
  //function to change classname from "light-mode" to "dark-mode" for element with id "root"
  const changeMode = () => {
    const root = document.getElementById("root");
    root.className =
      root.className === "light-mode" ? "dark-mode" : "light-mode";
  };

  return <></>;
}

export default App;
