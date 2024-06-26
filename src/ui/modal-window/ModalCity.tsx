import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './ModalWindow.module.scss'

interface ModalCityProps {
  onHide: () => void;
  show: boolean;
  centered: boolean;
  backdrop: boolean;
  setCity: (city: string) => void;
}

const cities = [
  "Москва", "Киров", "Пермь", "Казань", "Сыктывкар",
  "Нижний Новгород", "Кострома", "Москва", "Киров",
  "Пермь", "Казань", "Сыктывкар", "Нижний Новгород",
  "Кострома", "Москва", "Киров", "Пермь", "Казань",
  "Сыктывкар", "Нижний Новгород", "Кострома"
];

const ModalWindow: FC<ModalCityProps> = ({ onHide, show, centered, backdrop, setCity }) => {
  const handleCityClick = (city: string) => {
    setCity(city);
    onHide();
  };

  return (
    <Modal
      show={show}
      centered={centered}
      backdrop={backdrop}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className={styles.modalCity}
    >
      <Modal.Header closeButton>
        <h3>Укажите ваш город</h3>
      </Modal.Header>
      <Modal.Body className={styles.bodyCity}>
        <ul className={styles.ulCity}>
          {cities.map((city) => (
            <li key={city} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default ModalWindow;
