'use client'

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";
import styles from './Slider.module.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.css";

const MySlider: FC = () => {
  return (
    <div className={`${styles.sliderWrapper}, container`}>
      <Carousel showArrows={false} emulateTouch={true} centerMode={false} infiniteLoop={true} showStatus={false}>
        <Link href={""} >
          <div className={styles.slider}>
            <div className={styles.sliderLeft}>
              <h3 className={styles.sliderPretitle}>
                Интернет-магазин кальянов и аксессуаров
              </h3>
              <h2 className={styles.sliderTitle}>
                Smoking shop
              </h2>
              <p className={styles.sliderText}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
              <Button text={"Начать покупки"} />
            </div>
            <div className={styles.sliderRight}>
              <Image className={styles.sliderImage} src='/images/slider-1.png' alt={""} width={550} height={350} />
            </div>
          </div>
        </Link>
        <Link href={""}>
          <div className={styles.slider}>
            <div className={styles.sliderLeft}>
              <h3 className={styles.sliderPretitle}>
                Интернет-магазин кальянов и аксессуаров
              </h3>
              <h2 className={styles.sliderTitle}>
                Smoking shop
              </h2>
              <p className={styles.sliderText}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
              <Button text={"Начать покупки"} />
            </div>
            <div className={styles.sliderRight}>
              <Image className={styles.sliderImage} src='/images/slider-1.png' alt={""} width={550} height={350} />
            </div>
          </div>
        </Link>
        <Link href={""}>
          <div className={styles.slider}>
            <div className={styles.sliderLeft}>
              <h3 className={styles.sliderPretitle}>
                Интернет-магазин кальянов и аксессуаров
              </h3>
              <h2 className={styles.sliderTitle}>
                Smoking shop
              </h2>
              <p className={styles.sliderText}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
              <Button text={"Начать покупки"} />
            </div>
            <div className={styles.sliderRight}>
              <Image className={styles.sliderImage} src='/images/slider-1.png' alt={""} width={550} height={350} />
            </div>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default MySlider;
