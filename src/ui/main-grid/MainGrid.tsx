import { FC } from 'react'
import styles from './MainGrid.module.scss'
import Filter from '../filter/Filter'

const MainGrid: FC = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className={`${styles.sidebar} col-3`}>
          <Filter />
        </div>
        <div className={`${styles.catalog} col-9`}>

        </div>
      </div>
    </div>
  )
}

export default MainGrid
