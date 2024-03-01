import Breadcrumb from "./Breadcrumb";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { elasticPoolsGrid, appServiceGrid } from "../data";
import { dataResources } from "../data";
import CreateResourcePage from "./CreateResourcePage";

export default function Page({ titleClassName, pageKey, title, data, renderParent }) {

  useEffect(() => {
    data.loading = true;
    setTimeout(() => {
      switch (pageKey) {
        case "appServicesPage": {
          data.data = elasticPoolsGrid;
          break;
        }
        case "elasticPoolsPage": {
          data.data = appServiceGrid;
          break;
        }
        case "createResourcePage": {
          data.data = dataResources;
          break;
        }
      }

      renderParent(pageKey, data.data);

    }, 2000);

    console.log("loaded");

    return () => {
      console.log("disposed");
    };
  }, []);

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <PageTitle rootClassName={titleClassName} title={title}></PageTitle>
      {pageKey === "createResourcePage" && <CreateResourcePage dataResources={data.data}></CreateResourcePage>}
      {pageKey === "elasticPoolsPage" /*&& <CreateResourcePage></CreateResourcePage>} */}
      {pageKey === "appServicesPage" /*&& <CreateResourcePage></CreateResourcePage>*/}
    </div>
  );
}
