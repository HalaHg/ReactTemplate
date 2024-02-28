import { MainTitle } from "./MainTitle";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import "../styles/Grid.css";
import Breadcrumb from "./Breadcrumb";

export function Grid(props) {
  const { dataGrid /*...other*/ } = props;
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <MainTitle>Virtual Machines</MainTitle>

      <div className="ag-theme-quartz">
        <AgGridReact
          columnDefs={dataGrid.columnDefs}
          rowData={dataGrid.rowData}
        ></AgGridReact>
      </div>
    </>
  );
}
