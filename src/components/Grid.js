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
  // const { id } = useParams();

  const { dataGrid /*...other*/ } = props;

  return (
    <>
      <Breadcrumb></Breadcrumb>
      <MainTitle>Virtual Machines</MainTitle>
      <Toolbar /*buttons={dataGrid[id].buttons}*/></Toolbar>

      <div className="ag-theme-quartz">
        <AgGridReact
          columnDefs={dataGrid.columnDefs}
          rowData={dataGrid.rowData}
        ></AgGridReact>
      </div>
    </>
  );
}
