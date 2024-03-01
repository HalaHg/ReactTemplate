import "../styles/PageTitle.css";
export function PageTitle({ title, rootClassName }) {
  return <div className={`page-title ${rootClassName}`}>{title}</div>;
}
