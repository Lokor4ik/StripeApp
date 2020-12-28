import PropsTypes from 'prop-types';
import styles from './FormField.module.scss';

export default function FormField({ label, type, name, placeholder }) {
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

FormField.propTypes = {
  label: PropsTypes.string,
  type: PropsTypes.string,
  name: PropsTypes.string,
  placeholder: PropsTypes.string
};