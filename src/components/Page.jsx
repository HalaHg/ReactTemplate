import "./Page.css";

export function Page({onSelect, onAdd, contents}) {

return (
  <>
  <h3 className="pageTitle">Azure Services</h3>
    <div className="flexBox">

    {contents.map((content, index) => (
          <button key={index} className="buttonFlex"
            onClick={() => content.order > 0 ? onSelect(content, index) : onAdd(content)}>
            <img className="imgClass" src={content.src} alt={content.name} />
            {content.name}
          </button>
      ))}
    </div>
  </>
);
}