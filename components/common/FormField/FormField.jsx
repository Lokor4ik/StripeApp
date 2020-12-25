import PropsTypes from 'prop-types';
import styles from './FormField.module.scss';

export default function FormField({ label, type, name, placeholder, required }) {
  return (
    <div className={styles.formFieldContainer}>
      <label
        className={styles.formFieldLabel}
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className={styles.formFieldInput}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}