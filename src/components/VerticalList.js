import "./VerticalList.css";

export default function VerticalList(props) {
  const { title, categories, onItemClick, ...other } = props;

  return (
    <ul className="leftMenu">
      <li className="title">{title}</li>
      {categories.map((e, index) => {
        return (
          <li
            className={e.categSelected == true ? "active" : null}
            key={e.id}
            id={e.id}
            onClick={() => onItemClick(e)}
          >
            <b>{e.title}</b>
          </li>
        );
      })}
    </ul>
  );
}
