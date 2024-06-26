import { FC } from 'react'
import styles from './Blog.module.scss'
import { blogData } from './blog.data'
import BlogItem from './BlogItem'

const Blog: FC = () => {
  return (
    <div className={`${styles.blog} container`}>
      <h3 className={styles.blogTitle}>Наш блог</h3>
      <p className={styles.blogDescr}>Мы являемся интернет-магазином кальянов, предлагающим широкий ассортимент современных и по доступной цене кальянов и их комплектующих.</p>
      <div className={styles.cardsWrapper}>
        {blogData.map((item) => (
          <BlogItem key={item.title} image={item.image} date={item.date} title={item.title} descr={item.descr} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Blog
