import { OffersFilters } from '../../utils/types';

export type SelectPropsType = {
  filters: OffersFilters[];
  onSelectItemClick: (selectName: OffersFilters) => void;
  isSelected: string;
}
