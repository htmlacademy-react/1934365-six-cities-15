import { OffersFilters } from '../../utils/types';

export type SelectItemPropsType = {
  filter: OffersFilters;
  isSelected: boolean;
  onSelectItemClick: (selectName: OffersFilters)=> void;
}
