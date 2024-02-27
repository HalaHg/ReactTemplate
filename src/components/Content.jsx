import "./Content.css";

export function Content({onSelect, onAdd, contents}) {

return (
    <div className="flexBox">
    <button key={"add"}
            onClick={() => onAdd()}>
            <img width={30} src="/add.png" alt="add" />
          </button>

    {contents.map((content, index) => (
          <button key={index}
            onClick={() => onSelect(content.name, index)}>
            <img width={30} src={content.src} alt={content.name} />
          </button>
      ))}
    </div>
);
}