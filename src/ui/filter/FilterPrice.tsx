import { FC, useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import styles from './Filter.module.scss';

const FilterPrice: FC = () => {
  const [priceValue, setPriceValue] = useState([500, 12000])

  return (
    <div>
      <RangeSlider value={priceValue} min={100} max={15000} onInput={(value:any) => {setPriceValue(value)}} />
      <div className={styles.priceRange}>
        {priceValue[0]}₽ - {priceValue[1]}₽
      </div>
    </div>
  )
}

export default FilterPrice
