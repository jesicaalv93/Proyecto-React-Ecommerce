import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="position-relative d-inline-flex align-items-center ms-3">
      <i className="bi bi-cart fs-4 text-dark"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle border border-dark text-dark fw-semibold">
        0
      </span>
    </div>
  );
};

export default CartWidget;