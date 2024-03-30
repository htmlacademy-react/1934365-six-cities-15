import { offersFilters } from "../../utils/types";

export type SelectPropsType = {
  filters: offersFilters[];
  onSelectItemClick: (selectName: string) => void;
  isSelected: string;
}
