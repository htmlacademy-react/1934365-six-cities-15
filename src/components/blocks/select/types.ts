import { offersFilters } from '../../utils/types';

export type SelectPropsType = {
  filters: offersFilters[];
  onSelectItemClick: (selectName: offersFilters) => void;
  isSelected: string;
}
