import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./dataTable";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { fetchItems } from "../redux/item-actions";

const Table = () => {
  // const [itemId, setItemId] = useState(1);
  const dispatch = useAppDispatch();
  const allItems = useAppSelector((state) => state.item.all_items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {allItems ? (
        <DataGrid
          rows={allItems}
          columns={columns}
          sx={{ color: "white", borderColor: "primary.light" }}
        />
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default Table;
