import SelectItem from '../select-item/SelectItem';

export default function Select({ filters }: { filters: string[] }): JSX.Element {

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {filters.map((filter: string) => (
        <SelectItem
          key = {filter}
          filter = {filter}
        />
      ))}
      {/* <li className="places__option places__option--active" tabIndex={0}>Popular</li>
      <li className="places__option" tabIndex={0}>Price: low to high</li>
      <li className="places__option" tabIndex={0}>Price: high to low</li>
      <li className="places__option" tabIndex={0}>Top rated first</li> */}
    </ul>
  );
}
