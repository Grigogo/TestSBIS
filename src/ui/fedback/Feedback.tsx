import { FC } from 'react'
import styles from './Feedback.module.scss'
import Image from 'next/image'

const Feedback: FC = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h3>Не нашли нужный товар?</h3>
        <form className={styles.form} action="submit">
          <input className={styles.input} type="email" placeholder='впишите ваш email ...' />
          <button className={styles.button} type="submit">
            Ok
          </button>
        </form>
        <p className={styles.descr}>Мы сможем подобрать нужный вам товар, а так же помочь со всеми вопросами, просто заполните ваш емейл и мы вам ответим</p>
        <Image className={styles.image} src={'/images/feedback.png'} alt={'feedback'} width={370} height={425} />
      </div>
    </div>
  )
}

export default Feedback
