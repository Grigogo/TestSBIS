import { FC } from 'react'
import styles from './Merch.module.scss'
import MerchItem from './MerchItem'
import { merchData } from './merch.data'

const Merch: FC = () => {
  return (
    <div className={`${styles.merch} container d-flex mt-8 gap-5`}>
      {merchData.map((item) => (
        <MerchItem key={item.title} title={item.title} text={item.text} link={item.link} image={item.image} />
      ))}
    </div>
  )
}

export default Merch
