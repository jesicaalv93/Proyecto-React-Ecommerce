const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart-fill fs-4"></i>
      <span className="badge bg-danger ms-2">0</span>
    </div>
  );
};

export default CartWidget;