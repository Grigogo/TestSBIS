import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './ModalWindow.module.scss'

interface ModalWindowProps {
  onHide: () => void;
  showModalCity: () => void;
  show: boolean;
  centered: boolean;
  backdrop: boolean;
  city: string;
}

const ModalWindow: FC<ModalWindowProps> = ({ onHide, show, centered, backdrop, city, showModalCity }) => {
  return (
    <Modal
      show={show}
      centered={centered}
      backdrop={backdrop}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      className={styles.modal}
    >
      <Modal.Body className={styles.body}>
        <div className={styles.text}>Ваш город <span className={styles.span}>{city}</span> верно?</div>
        <div className={styles.buttons}>
          <Button className={styles.blackButton} onClick={onHide}>Да</Button>
          <Button className={styles.button} onClick={showModalCity}>Нет</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalWindow
