import { FC } from 'react'
import CatalogHeader from './CatalogHeader'
import CatalogList from './CatalogList'

const Catalog: FC = () => {
  return (
    <div>
      <CatalogHeader />
      <br></br>
      <CatalogList />
    </div>
  )
}

export default Catalog
