import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/Toolbar.css";

export function Toolbar({ buttons }) {
  let toolbarObj = buttons;
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
