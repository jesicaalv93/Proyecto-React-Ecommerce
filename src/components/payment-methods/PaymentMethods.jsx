import "./PaymentMethods.css";
import { CreditCard, Landmark, DollarSign, RefreshCw } from "lucide-react";

const PaymentMethods = () => {
  const methods = [
    {
      icon: CreditCard,
      title: "Tarjetas de Crédito y Débito",
      description:
        "Aceptamos todas las principales tarjetas a través de Mercado Pago y otras pasarelas seguras. Puedes pagar en cuotas sin interés con promociones seleccionadas.",
      details: "Visa, MasterCard, American Express, Naranja, etc.",
      color: "var(--pm-blue)",
    },
    {
      icon: Landmark,
      title: "Transferencia Bancaria",
      description:
        "Pago por transferencia directa a nuestra cuenta. Recibe un 10% de descuento adicional por esta vía.",
      details: "CBU / Alias: latirofficial. Envía el comprobante a nuestro WhatsApp.",
      color: "var(--pm-green)",
    },
    {
      icon: DollarSign,
      title: "Efectivo (Puntos de Pago)",
      description:
        "Puedes generar tu orden de pago y pagar en efectivo en nuestro local.",
      details: "El pedido se despacha una vez acreditado el pago.",
      color: "var(--pm-indigo)",
    },
  ];

  return (
    <div className="container my-5 payment-container">
      <h2 className="text-center mb-4 payment-title">Medios de Pago</h2>

      <div className="row g-4">
        {methods.map((method, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="payment-card">
              <div className="payment-header d-flex align-items-center mb-3">
                <method.icon size={34} style={{ color: method.color }} className="me-2" />
                <h4 className="m-0">{method.title}</h4>
              </div>

              <p className="payment-description">{method.description}</p>

              <div className="payment-details">
                {method.details}
              </div>
            </div>
          </div>
        ))}

        {/* Extra info */}
        <div className="col-12 mt-3">
          <div className="payment-warning">
            <div className="d-flex align-items-center mb-1">
              <RefreshCw size={20} className="me-2 payment-warning-icon" />
              <h5 className="m-0">Pagos Seguros y Devoluciones</h5>
            </div>
            <p className="payment-warning-text">
              Todas tus transacciones están protegidas con encriptación SSL. Si no estás conforme,
              cuentas con 30 días para solicitar la devolución.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
