import React from "react";
import "../styles/Breadcrumb.css";
const Breadcrumb = () => {
  //const location = useLocation();
  //const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      {/* <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={name}>
            {!isLast ? (
              <>
                <span> &gt; </span>
                <Link to={routeTo}>{name}</Link>
              </>
            ) : (
              <span> &gt; {name.toUpperCase()}</span>
            )}
          </span>
        );
      })} */}
    </div>
  );
};

export default Breadcrumb;
