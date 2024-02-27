import "./Page.css";

export function Page({onSelect, onAdd, contents}) {

return (
  <>
  <h3 className="pageTitle">Azure Services</h3>
    <div className="flexBox">
    <button key={"add"} className="buttonFlex"
            onClick={() => onAdd()}>
            <img className="imgClass" width={30} src="/add.png" alt="add" />
            {"Create a resource"}
          </button>

    {contents.map((content, index) => (
          <button key={index} className="buttonFlex"
            onClick={() => onSelect(content.name, index)}>
            <img className="imgClass" width={30} height={30} src={content.src} alt={content.name} />
            {content.name}
          </button>
      ))}
    </div>
  </>
);
}