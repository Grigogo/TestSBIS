import { FC } from 'react'
import styles from './Blog.module.scss'
import Image from 'next/image'
import IBlogCard from './blog.interface'
import Link from 'next/link'

const BlogItem: FC<IBlogCard> = ({image, date, title, descr, link}) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.cardImage}>
        <Image className={styles.image} src={image} alt={title} width={268} height={195} />
      </div>
      <div className={styles.card}>
        <div className={styles.cardDate}>{date}</div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescr}>{descr}</div>
        <Link className={styles.cardLink} href={link}>Читать →</Link>
      </div>
    </div>
  )
}

export default BlogItem
