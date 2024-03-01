import "../styles/PageTitle.css";
export default function PageTitle({ title, rootClassName }) {
  return <div className={`page-title ${rootClassName}`}>{title}</div>;
}
