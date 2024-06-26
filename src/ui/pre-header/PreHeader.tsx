'use client'

import { SlSocialVkontakte } from "react-icons/sl";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalWindow from "../modal-window/ModalWindow";
import { Button } from "react-bootstrap";
import styles from './PreHeader.module.scss'
import ModalCity from "../modal-window/ModalCity";

export default function PreHeder() {
  const [modalShow, setModalShow] = useState(false);

  const defaultCity = 'Киров';
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(city));
  }, [city]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [modalCityShow, setModalCityShow] = useState(false);

  return (
    <div className={`${styles.preHeader} d-flex bg-darkColor text-white`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={`${styles.dropdown} d-flex gap-1 justify-content-between align-items-center`} onClick={() => setModalCityShow(true)}>
          {city}
          <IoIosArrowDown />
        </div>
        <div className="social d-flex h-6 gap-4">
          <Link href={"https://vk.com/"}>
            <SlSocialVkontakte className={styles.socialIcon} />
          </Link>
          <Link href={"https://www.youtube.com/"}>
            <FaYoutube className={styles.socialIcon} />
          </Link>
          <Link href={"https://telegram.org/"}>
            <FaTelegramPlane className={styles.socialIcon} />
          </Link>
        </div>
      </div>
      <ModalWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        showModalCity={() => {
          setModalShow(false);
          setModalCityShow(true);
        }}
        centered={false}
        backdrop={false}
        city={city}
      />
      <ModalCity
        show={modalCityShow}
        onHide={() => setModalCityShow(false)}
        centered={true}
        backdrop={true}
        setCity={(selectedCity) => setCity(selectedCity)}
      />
    </div>
  );
}
