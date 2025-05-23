import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { airlines } from "./data";
import type { Airline, Dimension } from "./types";

// calculate total height of the table
// const singleRowHeight = 52;
// const headerHeight = 56;
// const rowCount = airlines.length;
// const totalHeight = singleRowHeight * rowCount + headerHeight;

const columnWidths = {
  country: 130,
  name: 180,
  carryOnImperial: 150,
  carryOnMetric: 180,
  personalItemImperial: 150,
  personalItemMetric: 150,
};

const tableWidth = Object.values(columnWidths).reduce((acc, width) => acc + width, 0);

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
  { field: "country", headerName: "Country", width: columnWidths.country },
  {
    field: "name",
    headerName: "Airline",
    width: columnWidths.name,
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
    width: columnWidths.carryOnImperial,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.imperial),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.carryOn?.imperial, params.row),
  },
  {
    field: "carryOn.metric",
    headerName: "Metric",
    width: columnWidths.carryOnMetric,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.carryOn?.metric),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.carryOn?.metric, params.row),
  },
  {
    field: "personalItem.imperial",
    headerName: "Imperial",
    width: columnWidths.personalItemImperial,
    valueGetter: (_: Dimension, row: Airline) =>
      formatDimension(row.personalItem?.imperial),
    renderCell: (params: GridRenderCellParams<any, Airline>) =>
      renderCellWithSourceUrl(params.row.personalItem?.imperial, params.row),
  },
  {
    field: "personalItem.metric",
    headerName: "Metric",
    width: columnWidths.personalItemMetric,
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
    <div style={{ width: tableWidth }}>
      <DataGrid
        rows={airlines}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        hideFooterPagination={true}
        hideFooterSelectedRowCount
        sx={{
          fontSize: "14px",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            color: "#333",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnHeader": {
            // border: "solid 1px #e0e0e0",
          },
          "& .MuiDataGrid-row": {
            "&:nth-child(even)": {
              backgroundColor: "#fafafa",
            },
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#fafafa",
          },
        }}
      />
    </div>
  );
};

export default Table;
