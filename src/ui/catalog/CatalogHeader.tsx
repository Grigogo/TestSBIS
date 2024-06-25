import { AwaitedReactNode, FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import styles from './Catalog.module.scss'
import { sectionData } from './catalog-sections.data'
import cn from 'clsx'

const CatalogHeader: FC = () => {
  return (
    <div className={`${styles.nav} d-flex gap-3 align-items-center`}>
      {sectionData.map((item: { name: string }, index: number) => (
        <div key={index} className={cn(styles.listItem, index === 0 ? styles.listItemActive : '')}>{item.name}</div>
      ))}
  </div>
  )
}

export default CatalogHeader
