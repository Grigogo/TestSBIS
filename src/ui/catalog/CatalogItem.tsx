import Image from 'next/image'
import { FC } from 'react'
import styles from './Catalog.module.scss'
import Button from '../button/Button'
import ICardData from './card-data.interface'

const CatalogItem: FC<ICardData> = ({name, price, oldPrice, sale, image}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <div className={styles.hoverCard}>
          <div className={styles.like}>
            <Image src={'/Like.svg'} alt={'Like'} width={18} height={18}/>
          </div>
          <div className={styles.addToCart}>
            <Button text={'В корзину'} />
            <div className={styles.plusMinus}>
              <div className={styles.count}>+</div>
              <div>1</div>
              <div className={styles.count}>-</div>
            </div>
          </div>
        </div>
        {oldPrice ? (
          <div className={styles.sale}>
          {sale}% sale
        </div>
        ) : null}
        <Image src={image} alt={''} width={248} height={204} />
      </div>
      <div>
        <div className={styles.cardName}>
          {name}
        </div>
        <div className={styles.cardPrice}>
          {price}₽
          {oldPrice ? (<span className={styles.oldPrice}>{`${oldPrice}₽`}</span>) : null}
        </div>
      </div>
    </div>
  )
}

export default CatalogItem
