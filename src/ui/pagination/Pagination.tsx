import { FC } from "react";
import styles from './Pagination.module.scss'

const Pagination: FC = () => {
  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.paginationItem} ${styles.paginationItemActive}`}
      >
        1
      </div>
      <div className={styles.paginationItem}>2</div>
      <div className={styles.paginationItem}>3</div>
      <div className={styles.paginationItem}>4</div>
    </div>
  );
};

export default Pagination;
