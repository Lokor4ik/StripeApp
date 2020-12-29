import { useState } from "react";
import MainLayout from "components/Layout";
import AppleShop from "components/AppleShop/AppleShop";
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import getApplePrice from "utils/get-apple-price";
import Modal from "components/Modal/Modal";

const shopConfig = {
  minCount: 1,
  maxCount: 15
};

export default function MainPage() {
  const [numApples, setNumApples] = useState(1);
  const [message, setMessage] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isProcessing, setProcessingTo] = useState(false);

  const handleProcess = (flag) => {
    setProcessingTo(flag);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProcessingTo(false);
  };

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
        scopeMessage={message}
        isProcessing={isProcessing}
      />
      <CheckoutForm
        price={getApplePrice(numApples)}
        onSuccessfulCheckout={openModal}
        isProcessing={isProcessing}
        handleProcess={handleProcess}
      />
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </MainLayout>
  );
}
