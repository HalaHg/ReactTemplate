export default function VerticalList(props) {
  const { title, categories, id, onItemClick, ...other } = props; //items:[{id:, title}, ....]

  return (
    <ul className="leftMenu">
      <li className="title">{title}</li>
      {categories.map((e, index) => {
        if (e.id == id) {
          return (
            <li
              className="active"
              key={e.id}
              id={e.id}
              onClick={() => onItemClick(e.id)}
            >
              <b>{e.title}</b>
            </li>
          );
        } else {
          return (
            <li key={e.id} id={e.id} onClick={() => onItemClick(e.id)}>
              {e.title}
            </li>
          );
        }
      })}
    </ul>
  );
}
