import "@fortawesome/fontawesome-free/css/all.css";
import { dataGrid } from "../data";
import "../styles/Toolbar.css";
const Toolbar = () => {
  let data = dataGrid;
  let toolbarObj = data[0].buttons;
  console.log(toolbarObj);
  return (
    <div className="toolbar">
      {toolbarObj.map((e, index) => (
        <div key={index} className="tool">
          <i className={e.class}></i> <span>{e.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
