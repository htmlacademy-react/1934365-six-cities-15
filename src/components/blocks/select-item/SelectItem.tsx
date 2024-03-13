import { SelectItemPropsType } from './types';

export default function SelectItem({filter, isSelected, onSelectItemClick}: SelectItemPropsType): JSX.Element {
  const handleClick = (): void => {
    onSelectItemClick(filter);
  };
  return (
    <li
      className={`places__option ${isSelected} ? 'places__option--active' : ''`}
      tabIndex={0}
      onClick={handleClick}
    >{filter}
    </li>
  );
}
