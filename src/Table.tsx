import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { airlines } from "./data";
import type { Airline, Dimension } from "./types";

const formatDimension = (dimension: Dimension | undefined): string => {
  if (!dimension) return "-";
  return `${dimension.length} x ${dimension.width} x ${dimension.height} ${dimension.unit}`;
};

const columns = [
  { field: "country", headerName: "Country", width: 130 },
  { field: "name", headerName: "Airline", width: 180 },
  {
    field: "carryOn.imperial",
    headerName: "Imperial",
    width: 200,
    valueGetter: (value: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.imperial),
  },
  {
    field: "carryOn.metric",
    headerName: "Metric",
    width: 200,
    valueGetter: (value: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.metric),
  },
  {
    field: "personalItem.imperial",
    headerName: "Imperial",
    width: 200,
    valueGetter: (value: Dimension, row: Airline) =>
      formatDimension(row.personalItem?.imperial),
  },
  {
    field: "personalItem.metric",
    headerName: "Metric",
    width: 200,
    valueGetter: (value: Dimension, row: Airline) =>
      formatDimension(row.personalItem?.metric),
  },
];

const columnGroupingModel = [
  {
    groupId: "Carry-On",
    children: [{ field: "carryOn.imperial" }, { field: "carryOn.metric" }],
  },
  {
    groupId: "Personal",
    children: [
      { field: "personalItem.imperial" },
      { field: "personalItem.metric" },
    ],
  },
];

const Table = () => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={airlines}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
      />
    </div>
  );
};

export default Table;
