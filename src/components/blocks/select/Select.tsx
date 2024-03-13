import { FormEvent, useEffect, useRef, useState } from 'react';
import SelectItem from '../select-item/SelectItem';

export default function Select({ filters }: { filters: string[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(filters[0]);
  const FormRef = useRef<HTMLFormElement>(null);
  const onSelectItemClick = (selectName: string) => {
    filters.find((filter) => {
      if (filter === selectName) {
        setIsSelected(filter)
      }
    })
  }
  const onSelectMenuClick = (evt: FormEvent<HTMLFormElement>) => {
    if (evt.currentTarget) {
      setIsOpen(!isOpen)
    }
  }
  useEffect(() => {
    const onHandleClick = (evt: MouseEvent) => {
      const { target } = evt;
      if (target instanceof Node && !FormRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', onHandleClick)

    return () => {
      window.removeEventListener('click', onHandleClick);
    };
  }, [])

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
          {filters.map((filter: string) => (
            <SelectItem
              key={filter}
              filter={filter}
              isSelected={false}
              onSelectItemClick={onSelectItemClick}
            />
          ))}
        </ul>
        : null
      }
    </form>
  );
}
