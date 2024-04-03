import { offersFilters } from '../../utils/types';

export type SelectItemPropsType = {
  filter:string;
  isSelected: boolean;
  onSelectItemClick: (selectName: offersFilters)=> void;
}
