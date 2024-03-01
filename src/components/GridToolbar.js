import { Toolbar } from "./Toolbar"
import { Grid } from "./Grid"

export function GridToolbar({ data }) {

  return (
    <>
      <Toolbar buttons={data.buttons} />
      <Grid rowData={data.rowData} columnDefs={data.columnDefs} />
    </>
  );
};
