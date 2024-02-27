import "../styles/Page.css";
import { Link } from 'react-router-dom';

export function Page({onSelect, onAdd, contents}) {

return (
  <>
  <h3 className="pageTitle">Azure Services</h3>
    <div className="flexBox">

    {contents.map((content, index) => (
       <Link to={ index > 0 ? "/grid" : "/resource"} key={index}>
          <button key={index} className="buttonFlex"
            onClick={() => content.order > 0 ? onSelect(content, index) : onAdd(content)}>
            <img className="imgClass" src={require(`../images/${content.src}`)} alt={content.name} />
            {content.name}
          </button>
          </Link>
      ))}
    </div>
  </>
);
}