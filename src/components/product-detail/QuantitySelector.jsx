import { useState } from "react";

const QuantitySelector = ({ onAdd }) => {
  const [qty, setQty] = useState(1);

  const increase = () => setQty(q => q + 1);
  const decrease = () => {
    if (qty > 1) setQty(q => q - 1);
  };

  return (
    <div className="d-flex align-items-center gap-3 mt-3">

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={decrease}
        >
          -
        </button>

        <span>{qty}</span>

        <button
          className="btn btn-outline-dark btn-sm"
          onClick={increase}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-dark btn-sm"
        onClick={() => onAdd(qty)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default QuantitySelector;