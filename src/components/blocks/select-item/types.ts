import { offersFilters } from '../../utils/types';

export type SelectItemPropsType = {
  filter: offersFilters;
  isSelected: boolean;
  onSelectItemClick: (selectName: offersFilters)=> void;
}
