import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./dataTable";

function Table() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ color: "white", borderColor: "primary.light" }}
      />
    </div>
  );
}

export default Table;
