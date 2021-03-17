import Dropdown from './components/Dropdown';

export default function App(props) {

  const comps = {
    dropdown: Dropdown,
    other: '',
  }
  const TagName = comps[props.tagName];

  return (
    <div className="app">
      <h1>Welcome, {props.tagName}</h1>

      <TagName />
    </div>
  );
}
