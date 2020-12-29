import axios from "axios";

export default async function paymentMethod(
  billingDetails,
  cardElement,
  price,
  stripe,
  onSuccessfulCheckout,
  handleProcess,
  handleError
) {
  try {
    const { data: clientSecret } = await axios.post("/api/payment_intents", {
      amount: price * 100
    });

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails
    });

    if (paymentMethodReq.error) {
      handleError(paymentMethodReq.error.message);
      handleProcess(false);
      return;
    }

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id
    });

    if (error) {
      handleError(error.message);
      handleProcess(false);
      return;
    }

    onSuccessfulCheckout();
  } catch (err) {
    handleError(err.message);
  }
}