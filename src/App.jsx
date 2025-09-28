import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer message="¡Bienvenida a Latir Oficial!" />
    </>
  );
};

export default App;