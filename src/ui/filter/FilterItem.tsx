import { FC, useState } from "react";
import { IFilterItem } from "./filter.interface"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import styles from './Filter.module.scss'
import cn from 'clsx'

interface FilterItemProps {
  items?: IFilterItem[];
  category: string;
  total: number
}

const FilterItem: FC<FilterItemProps> = ({ items, category, total }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className={styles.listItem} onClick={toggleOpen}>
        <div className="d-flex gap-1 mb-3">
          {items && (isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />)}
          {category}
        </div>
        <span>({total})</span>
      </div>
      <div className={styles.accordWrap}>
        {items && (
          <div className={cn(isOpen ? styles.accordionExpanded : styles.accordionTurn)}>
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

    // <Accordion defaultActiveKey="0">
    //   <Accordion.Item eventKey={`${index}`}>
    //     <AccordionHeader>{category}</AccordionHeader>
    //     {items ? (
    //       <Accordion.Body>
    //         {items.map((item) => (
    //           <div key={item.id}>{item.name}</div>
    //         ))}
    //       </Accordion.Body>
    //     ) : null}
    //   </Accordion.Item>
    // </Accordion>
