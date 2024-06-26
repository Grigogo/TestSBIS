import { AwaitedReactNode, FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import styles from './Footer.module.scss'
import { filterData } from '../filter/filter.data'
import Link from 'next/link'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaTelegramPlane, FaYoutube } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.list}>
            <h3 className={styles.title}>Мой аккаунт</h3>
            <ul>
              <li className={styles.listItem}>Мой аккаунт</li>
              <li className={styles.listItem}>История заказов</li>
              <li className={styles.listItem}>Наши контакты</li>
              <li className={styles.listItem}>Политика</li>
              <li className={styles.listItem}>Блог</li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.title}>Помощь</h3>
            <ul>
              <li className={styles.listItem}>Поддержка</li>
              <li className={styles.listItem}>Как купить</li>
              <li className={styles.listItem}>Оплата и доставка</li>
              <li className={styles.listItem}>Как вернуть</li>
              <li className={styles.listItem}>Контакты</li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3 className={styles.title}>Категории</h3>
            <ul>
              <li className={styles.listItem}>IQOS</li>
              <li className={styles.listItem}>Аксессуары</li>
              <li className={styles.listItem}>Кальянные смеси</li>
              <li className={styles.listItem}>Кальяны</li>
              <li className={styles.listItem}>Комплектующие</li>
              <li className={styles.listItem}>Мерч</li>
              <li className={styles.listItem}>Уголь</li>
              <li className={styles.listItem}>Электронные сигареты</li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <div className={styles.socialLinks}>
              <div>Соц сети</div>
              <div className={styles.socialIconsWrapper}>
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
            <div className={styles.age}>
              18+
            </div>
          </div>
          <div className={styles.nda}>
            <span>
              2023 Smoking Shop.Все права защищены.
            </span>
            ИНН 4345427922 КПП 434501001 ОГРН 1154350010473
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
