import PropsTypes from 'prop-types';
import ErrorImg from "public/error.svg";
import styles from './CheckoutError.module.scss';
export default function CheckoutError({ children }) {
  return (
    <div className={styles.errorContainer} role="alert">
      <ErrorImg />
      {children}
    </div>
  );
}

CheckoutError.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node
  ])
};