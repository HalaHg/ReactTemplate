import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import "../styles/Grid.css";

export function Grid({ rowData, columnDefs }) {
  return (
    <>
      <div className="grid-section">
        <div className="table ag-theme-quartz">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            rowSelection={"multiple"}
            checkboxSelection={true}
            rowMultiSelectWithClick={true}
          ></AgGridReact>
        </div>
      </div>
    </>
  );
}
