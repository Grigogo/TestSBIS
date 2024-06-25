import { FC } from "react";
import CatalogItem from "./CatalogItem";
import { catalogData } from "./catalog.data";
import styles from "./Catalog.module.scss";

const CatalogList: FC = () => {
  return (
    <div className={styles.catalogList}>
      {catalogData.map((item) => (
        <CatalogItem
          key={item.name}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
          sale={item.sale}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CatalogList;
