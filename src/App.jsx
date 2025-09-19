import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer message="¡Bienvenida a Aura Bikinis!" />
    </>
  );
};

export default App;