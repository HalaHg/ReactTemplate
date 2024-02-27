import { useState } from "react";
import VerticalList from "./VerticalList";
import { ResourceDetails } from "./ResourceDetails";
import { MainTitle } from "./MainTitle";

export function Resource(props) {
  const { dataResources, ...other } = props;

  const [resourceData, setResourceData] = useState(dataResources);

  function handleClick(item) {
    console.log(item);

    // Create a copy of categories array
    const updatedCategories = resourceData.categories.map((category) => ({
      ...category,
      categSelected: category.id === item.id, // Update the selected category
    }));

    setResourceData({
      ...resourceData,
      categories: updatedCategories,
    });
  }
  return (
    <div>
      <MainTitle>{resourceData.title}</MainTitle>
      <div style={{ display: "flex" }}>
        <VerticalList
          title={resourceData.listTitle}
          categories={resourceData.categories}
          onItemClick={(item) => handleClick(item)}
        ></VerticalList>
        <ResourceDetails></ResourceDetails>
      </div>
    </div>
  );
}
