import { useState } from "react";
import VerticalList from "./VerticalList";
import { ResourceDetails } from "./ResourceDetails";
import { PageTitle } from "./PageTitle";
import Breadcrumb from "./Breadcrumb";
import "../styles/CreateResourcePage.css";

export function CreateResourcePage({ dataResources }) {
  const [resourceData, setResourceData] = useState(dataResources);

  function handleClick(item) {
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
      <Breadcrumb />
      <PageTitle
        rootClassName="create-resource-page-root"
        title={resourceData.title}
      ></PageTitle>
      <div style={{ display: "flex" }}>
        <VerticalList
          title={resourceData.listTitle}
          categories={resourceData.categories}
          onItemClick={(item) => handleClick(item)}
        ></VerticalList>
        <ResourceDetails
          data={resourceData.categories.find(
            (category) => category.categSelected
          )}
        ></ResourceDetails>
      </div>
    </div>
  );
}
