import { FC } from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import IMerch from './merch.interface'
import styles from './Merch.module.scss'

const MerchItem: FC<IMerch> = ({title, text, link, image}) => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <Image src={image} alt={title} width={240} height={350} className={styles.image} />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div>
              {text}
            </div>
            <Button text={'Перейти'} icon='/arrow-forvard.svg' reverce={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchItem
