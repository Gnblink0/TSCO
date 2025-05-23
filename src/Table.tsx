import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { airlines } from "./data";
import type { Airline, Dimension } from "./types";

// calculate total height of the table
// const singleRowHeight = 52;
// const headerHeight = 56;
// const rowCount = airlines.length;
// const totalHeight = singleRowHeight * rowCount + headerHeight;

const formatDimension = (dimension: Dimension | undefined): string => {
  if (!dimension) return "-";
  if (dimension.isLinear) {
    return `${dimension.linearValue} ${dimension.unit} in Linear`;
  }
  return `${dimension.length} x ${dimension.width} x ${dimension.height} ${dimension.unit}`;
};

const renderCellWithSourceUrl = (value: Dimension, row: Airline) => {
  const text = formatDimension(value);
  const sourceUrl = row.carryOn?.sourceUrl;

        return sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {text}
          </a>
        ) : (
          text
        );
};

const columns = [
  { field: "country", headerName: "Country", width: 130 },
  {
    field: "name",
    headerName: "Airline",
    width: 180,
    renderCell: (params: any) => {
      
      const policyUrl = params.row.baggagePolicyUrl;
      return policyUrl ? (
      <a
        href={policyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
          {params.value}
        </a>
      ) : (
        params.value
      );
    },
  },
  {
    field: "carryOn.imperial",
    headerName: "Imperial",
    width: 150,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.imperial),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.carryOn?.imperial, params.row),
  },
  {
    field: "carryOn.metric",
    headerName: "Metric",
    width: 180,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.metric),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.carryOn?.metric, params.row),
  },
  {
    field: "personalItem.imperial",
    headerName: "Imperial",
    width: 150,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.personalItem?.imperial),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.personalItem?.imperial, params.row),
  },
  {
    field: "personalItem.metric",
    headerName: "Metric",
    width: 150,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.personalItem?.metric),
    renderCell: (params: any) =>
      renderCellWithSourceUrl(params.row.personalItem?.metric, params.row),
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
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={airlines}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        hideFooterPagination={true}
        hideFooterSelectedRowCount
      />
    </div>
  );
};

export default Table;
