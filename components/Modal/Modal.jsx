import ModalP from 'react-modal';
import PropsTypes from 'prop-types';
import ErrorImg from "public/error.svg";
import CheckImg from "public/check.svg";
import styles from './Modal.module.scss';

ModalP.setAppElement('#__next');

export default function Modal({
  modalIsOpen,
  closeModal
}) {
  return (
    <ModalP
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="mainModal"
      className={styles.mainModal}
    >
      <ErrorImg onClick={closeModal} />

      <div className={styles.modalInfoWrapper}>
        <CheckImg
          width={100}
          height={100}
          fill='#47a747'
        />
        <span className={styles.modalText}>Successfully sent!</span>
      </div>
    </ModalP>
  );
}

Modal.propTypes = {
  modalIsOpen: PropsTypes.bool,
  closeModal: PropsTypes.func
};