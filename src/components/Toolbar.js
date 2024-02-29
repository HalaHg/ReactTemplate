import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/Toolbar.css";

export function Toolbar({ buttons }) {
  let toolbarObj = buttons;

  return (
    <div className="toolbar">
      {toolbarObj.map((e, index) => (
        <div key={index} className="tool" hidden={e.hidden} disabled={e.disabled}>
          <i className={e.class} ></i> <span>{e.title}</span>
        </div>
      ))}
    </div>
  );
};
