import { useState } from "react";
import Router from "next/router";

import MainLayout from "components/Layout";
import AppleShop from "components/AppleShop/AppleShop";
import CheckoutForm from "components/CheckoutForm/CheckoutForm";

export default function MainPage() {
  const [numApples, setNumApples] = useState(1);

  // TODO: need to refactor
  const addApple = () => setNumApples(num => Math.min(12, num + 1));
  const remApple = () => setNumApples(num => Math.max(1, num - 1));

  return (
    <MainLayout title='Apple Shop'>
      <AppleShop
        onAddApple={addApple}
        onRemoveApple={remApple}
        numApples={numApples}
      />
      <CheckoutForm
        price={numApples}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </MainLayout>
  );
}
