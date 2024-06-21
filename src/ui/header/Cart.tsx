import { FC } from 'react'
import Image from "next/image";
import styles from './Header.module.scss'

interface ICart {
  counter: number
}

const Cart: FC<ICart> = ({ counter }) => {
  return (
    <div className="cart position-relative">
      <Image src={"/Cart.svg"} alt={""} width={24} height={24} />
      <div className={styles.counter}>
        {counter}
      </div>
    </div>
  )
}

export default Cart
