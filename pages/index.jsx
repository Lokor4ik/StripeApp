import { useState } from "react";
import Router from "next/router";

import MainLayout from "components/Layout";
import AppleShop from "components/AppleShop/AppleShop";
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import getApplePrice from "utils/get-apple-price";

const shopConfig = {
  minCount: 1,
  maxCount: 15
};

export default function MainPage() {
  const [numApples, setNumApples] = useState(1);
  const [message, setMessage] = useState('');

  const layoutFunc = (count, num, msg) => {
    switch (numApples) {
      case count:
        setMessage(msg);
        break;

      default:
        setNumApples(prevNum => prevNum - num);
        message && setMessage('');
        break;
    }
  };

  const addApple = () => {
    const { maxCount } = shopConfig;
    const num = '-1';
    const msg = 'Max 15 apples';

    layoutFunc(maxCount, num, msg);
  };

  const remApple = () => {
    const { minCount } = shopConfig;
    const num = '1';
    const msg = 'Min 1 apple';

    layoutFunc(minCount, num, msg);
  };

  return (
    <MainLayout title='Apple Shop'>
      <AppleShop
        onAddApple={addApple}
        onRemoveApple={remApple}
        numApples={numApples}
        countMessage={message}
      />
      <CheckoutForm
        price={getApplePrice(numApples)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </MainLayout>
  );
}
