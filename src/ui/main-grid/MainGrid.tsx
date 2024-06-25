import { FC } from 'react'
import styles from './MainGrid.module.scss'
import Filter from '../filter/Filter'
import Banner from '../banner/Banner'
import Catalog from '../catalog/Catalog'
import Pagination from '../pagination/Pagination'

const MainGrid: FC = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Filter />
          <Banner />
        </div>
        <div className={styles.catalog}>
          <Catalog />
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default MainGrid
