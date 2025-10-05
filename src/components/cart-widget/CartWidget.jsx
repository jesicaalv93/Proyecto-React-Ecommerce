import "./CartWidget.css";

const CartWidget = () => {
  return (
    <form class="d-flex">
      <button class="btn btn-outline-dark" type="submit">
        <i class="bi-cart-fill me-1"></i>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>
    </form>
  );
};

export default CartWidget;
