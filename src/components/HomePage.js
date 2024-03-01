import "../styles/Page.css";
import { useEffect } from "react";

const contents = [
  { key: "createResource", name: "Create a resource", src: "add.png" },
  { key: "appServices", name: "App Services", src: "app-services.png" },
  { key: "elasticPools", name: "SQL elastic pools", src: "sql-elastic-pools.png" },
];

export function HomePage({ onSelect, pageState }) {

  useEffect(() => {
    console.log("loaded");

    return () => {
      console.log("disposed")
    }
  }, []);

  return (
    <>
      <h3 className="pageTitle">Azure Services</h3>
      <div className="flexBox">
        {contents.map((content, index) => (
          <div key={index}>
            <button
              key={index}
              className="buttonFlex"
              onClick={() =>
                onSelect(content.key, index)
              }
            >
              <img
                className="imgClass"
                src={require(`../images/${content.src}`)}
                alt={content.name}
              />
              {content.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
