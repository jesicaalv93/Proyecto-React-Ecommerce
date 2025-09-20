import logo from "../assets/logo.png";

const ItemListContainer = ({ message }) => {
  return (
    <div className="container my-5 text-center">
      <img 
        src={logo} 
        alt="Logo Aura Bikinis" 
        width="300"
        height="300" 
        className="mb-3"
      />
      <h2 className="fw-bold">{message}</h2>
    </div>
  );
};

export default ItemListContainer;
