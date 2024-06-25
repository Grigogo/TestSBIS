"use client";

import { FC } from "react";
import { filterData } from "./filter.data";
import FilterItem from "./FilterItem";
import styles from "./Filter.module.scss";
import FilterPrice from "./FilterPrice";
import Button from "../button/Button";

const Filter: FC = () => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filterTitle}>Категории</h3>
      <div>
        {filterData.map((item, index) => (
          <FilterItem
            key={item.id}
            items={item.items ? item.items : undefined}
            category={item.category}
            total={item.totalItems}
          />
        ))}
      </div>
      <h3 className={styles.filterTitle}>Цена</h3>
      <FilterPrice />

      <div className="mt-5 d-flex justify-content-between">
        <Button text={"Применить"} />
        <Button text={"Сброс"} dark={true} />
      </div>
    </div>
  );
};

export default Filter;
