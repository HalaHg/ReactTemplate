import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useParams } from "react-router-dom";
import { Toolbar } from "./Toolbar";
import "../styles/Grid.css";
import Breadcrumb from "./Breadcrumb";
import { MainTitle } from "./MainTitle";

export function Grid(props) {
  const searchParams = useParams();
  //]] const { id } = useParams();

  const { dataGrid /*...other*/ } = props;
  const data = dataGrid.find(x => x.id == searchParams.id);


  return (
    <>
      <Breadcrumb></Breadcrumb>
      <MainTitle>{data.title}</MainTitle>
      <Toolbar buttons={data.buttons}></Toolbar>

      <div className="table ag-theme-quartz">
        <AgGridReact
          columnDefs={data.columnDefs}
          rowData={data.rowData}
        ></AgGridReact>
      </div>
    </>
  );
}
