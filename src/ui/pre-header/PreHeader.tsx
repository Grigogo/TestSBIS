'use client'

import { SlSocialVkontakte } from "react-icons/sl";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import ModalWindow from "../modal-window/ModalWindow";
import { Button } from "react-bootstrap";
import styles from './PreHeader.module.scss'

export default function PreHeder() {
  const [city, setCity] = useState('Киров')
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={`${styles.preHeader} d-flex bg-darkColor text-white`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={`${styles.dropdown} d-flex gap-1 justify-content-between align-items-center`} onClick={() => setModalShow(true)}>
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
      />
    </div>
  );
}
