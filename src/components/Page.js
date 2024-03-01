import { useEffect } from "react";
import { appServiceGrid, dataResources, elasticPoolsGrid } from "../data";
import Breadcrumb from "./Breadcrumb";
import CreateResourcePage from "./CreateResourcePage";
import PageTitle from "./PageTitle";
import ElasticPoolsPage from "./ElasticPoolsPage";
import AppServicesPage from "./AppServicesPage";

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
        default: {
          break;
        }
      }


    }, 2000);

    console.log("loaded");

    return () => {
      renderParent(data.data);

      console.log("disposed");
    };
  }, []);

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <PageTitle rootClassName={titleClassName} title={title}></PageTitle>
      {pageKey === "createResourcePage" && <CreateResourcePage dataResources={data.data}></CreateResourcePage>}
      {pageKey === "elasticPoolsPage" && <ElasticPoolsPage data={data.data}></ElasticPoolsPage>}
      {pageKey === "appServicesPage" && <AppServicesPage data={data.data}></AppServicesPage>}
    </div>
  );
}
