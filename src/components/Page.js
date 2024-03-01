import Breadcrumb from "./Breadcrumb";
import PageContent from "./PageContent";
import PageTitle from "./PageTitle";

useEffect(() => {
  console.log("loaded");

  return () => {
    console.log("disposed");
  };
}, []);
export default function () {
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <PageTitle rootClassName={titleClassName} title={title}></PageTitle>
      {/* <PageTitle
        rootClassName="create-resource-page-root"
        title={resourceData.title}
      ></PageTitle> */}
      <PageContent data={data}></PageContent>
    </div>
  );
}
