import PropsTypes from 'prop-types';
import classNames from 'classnames';
import AppleImg from "public/apple.svg";
import styles from './AppleShop.module.scss';
export default function AppleShop({
  onAddApple,
  onRemoveApple,
  numApples,
  scopeMessage,
  isProcessing
}) {
  const clsxShopControls = classNames({
    [styles.shopControls]: true,
    [styles.shopControlsDisabled]: isProcessing
  });

  return (
    <div className={styles.shop}>
      <h1 className={styles.shopName}>Apple Stripe</h1>
      <AppleImg
        width={90}
        height={90}
        fill='#d6301a'
      />
      <div className={styles.shopControlsWrapper}>
        <div className={styles.shopControlsMessage}>
          {scopeMessage && <span>*</span>}
          <span>{scopeMessage}</span>
        </div>

        <div className={clsxShopControls}>
          <button
            className={styles.shopDecrButton}
            onClick={onRemoveApple}
          >
            –
        </button>
          <input
            className={styles.shopInput}
            type="text"
            value={numApples}
            readOnly
          />
          <button
            className={styles.shopIncrButton}
            onClick={onAddApple}
          >
            +
        </button>
        </div>
      </div>
    </div>
  );
}

AppleShop.propTypes = {
  onAddApple: PropsTypes.func,
  onRemoveApple: PropsTypes.func,
  numApples: PropsTypes.number,
  scopeMessage: PropsTypes.string,
  isProcessing: PropsTypes.bool
};