import { FormEvent, useEffect, useRef, useState } from 'react';
import SelectItem from '../select-item/select-item';
import { SelectPropsType } from './types';
import { OffersFilters } from '../../utils/types';

export default function Select({ filters, onSelectItemClick, isSelected }: SelectPropsType): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const FormRef = useRef<HTMLFormElement>(null);

  const onSelectMenuClick = (evt: FormEvent<HTMLFormElement>) => {
    if (evt.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const onHandleClick = (evt: MouseEvent) => {
      const { target } = evt;
      if (target instanceof Node && !FormRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', onHandleClick);

    return () => {
      window.removeEventListener('click', onHandleClick);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get" onClick={onSelectMenuClick} ref={FormRef}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {isSelected}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen ?
        <ul className="places__options places__options--custom places__options--opened" >
          {Object.values(filters).map((filter: OffersFilters) => (
            <SelectItem
              key={filter}
              filter={filter}
              isSelected={false}
              onSelectItemClick={onSelectItemClick}
            />
          ))}
        </ul>
        : null}
    </form>
  );
}
