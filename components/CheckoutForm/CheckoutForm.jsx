import { useState } from "react";
import PropsTypes from 'prop-types';
import classNames from 'classnames';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import BillingDetailsFields from "components/BillingDetailsFields/BillingDetailsFields";
import CheckoutError from "components/CheckoutError/CheckoutError";
import styles from './CheckoutForm.module.scss';
import paymentMethod from "services/payment";
export default function CheckoutForm({
  price,
  onSuccessfulCheckout,
  isProcessing,
  handleProcess
}) {
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const clsxButton = classNames({
    [styles.checkoutButton]: true,
    [styles.checkoutButtonDisable]: isProcessing || !stripe
  });

  const clsxForms = classNames({
    [styles.checkoutFromsBox]: true,
    [styles.disabledFromsBox]: isProcessing
  });

  const handleError = (errorMsg) => {
    setCheckoutError(errorMsg);
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    handleProcess(true);

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };
    const cardElement = elements.getElement("card");

    await paymentMethod(
      billingDetails,
      cardElement,
      price,
      stripe,
      onSuccessfulCheckout,
      handleProcess,
      handleError
    );
  };

  const iframeStyles = {
    base: {
      fontSize: "16px",
      "::placeholder": {
        color: "#a0a0a0"
      }
    },
    invalid: {
      iconColor: "red",
      color: "red"
    },
    complete: {
      iconColor: "#47a747"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };

  return (
    <form
      className={styles.checkoutForm}
      onSubmit={handleFormSubmit}
    >
      <div className={clsxForms}>
        <BillingDetailsFields />

        <div className={styles.cardElementContainer}>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
          {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
        </div>

        <button
          className={clsxButton}
          disabled={isProcessing || !stripe}
        >
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </button>
      </div>
    </form>
  );
}

CheckoutForm.propTypes = {
  price: PropsTypes.string,
  onSuccessfulCheckout: PropsTypes.func,
  isProcessing: PropsTypes.bool,
  handleProcess: PropsTypes.func
};