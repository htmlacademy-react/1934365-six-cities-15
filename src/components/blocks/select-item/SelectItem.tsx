export default function SelectItem(props: {filter:string}): JSX.Element {

  return (
    <li
      className="places__option places__option--active"
      tabIndex={0}
    >{props.filter}
    </li>
  );
}
