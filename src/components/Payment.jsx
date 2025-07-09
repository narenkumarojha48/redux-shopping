import Cart from "./Cart";
import PaymentForm from "./PaymentForm";
const Payment = () => {
  return (
    <div className="paymentcontainer">
      <section>
        <Cart />
      </section>
      <section className="paymentFormContainer">
        <PaymentForm />
      </section>
    </div>
  );
};

export default Payment;
