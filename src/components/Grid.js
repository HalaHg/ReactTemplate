import { MainTitle } from "./MainTitle";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-quartz.css';
import '../styles/Grid.css'

export function Grid(props) {
  const { dataGrid, /*...other*/ } = props;
  return (
    <>
      <MainTitle>Virtual Machines</MainTitle>

      <div className="ag-theme-quartz">
        <AgGridReact
          columnDefs={dataGrid.columnDefs}
          rowData={dataGrid.rowData}>
        </AgGridReact>
      </div>
    </>
  );
}
