import { FC, useState, useRef, useEffect } from "react";
import { IFilterItem } from "./filter.interface";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import styles from './Filter.module.scss';
import cn from 'clsx';

interface FilterItemProps {
  items?: IFilterItem[];
  category: string;
  total: number;
}

const FilterItem: FC<FilterItemProps> = ({ items, category, total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (itemRef.current) {
      if (isOpen) {
        itemRef.current.style.height = `${itemRef.current.scrollHeight}px`;
      } else {
        itemRef.current.style.height = '0';
      }
    }
  }, [isOpen]);

  return (
    <div>
      <div className={styles.listItem} onClick={toggleOpen}>
        <div className="d-flex gap-1 mb-3">
          {items ? (
            isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />
          ) : (
            <div className={styles.stub} ></div>
          )}
          {category}
        </div>
        <span>({total})</span>
      </div>
      <div>
        {items && (
          <div
            ref={itemRef}
            className={styles.accordCollapse}
          >
            <ul>
              {items.map((item) => (
                <li key={item.id} className={styles.underListItem}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterItem;
