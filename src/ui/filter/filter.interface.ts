// Интерфейс для элемента фильтра
export interface IFilterItem {
  name: string;
  id: string;
}

export interface IFilter {
  id: string;
  category: string;
  totalItems: number;
  items?: IFilterItem[];
}
