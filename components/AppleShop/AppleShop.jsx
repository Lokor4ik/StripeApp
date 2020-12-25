import PropsTypes from 'prop-types';
import Image from 'next/image';
import styles from './AppleShop.module.scss';

export default function AppleShop({ onAddApple, onRemoveApple, numApples }) {
  return (
    <div className={styles.shop}>
      <h1 className={styles.shopName}>Apple stripe</h1>
      <Image
        src="/apple.png"
        alt="Picture of the apple"
        width={100}
        height={100}
      />

      <div className={styles.shopControls}>
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
  );
}

AppleShop.propTypes = {
  onAddApple: PropsTypes.func,
  onRemoveApple: PropsTypes.func,
  numApples: PropsTypes.number
};