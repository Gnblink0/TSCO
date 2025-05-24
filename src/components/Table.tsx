import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import type { Airline, Dimension } from "../types";
import { columnWidths, formatDimension, tableWidth } from "../TableUtils";
import { useState } from "react";
import InfoModal from "./InfoModal";


// calculate total height of the table
// const singleRowHeight = 52;
// const headerHeight = 56;
// const rowCount = airlines.length;
// const totalHeight = singleRowHeight * rowCount + headerHeight;



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
    groupId: "Personal Item",
    children: [
      { field: "personalItem.imperial" },
      { field: "personalItem.metric" },
    ],
  },
];

interface TableProps {
  data: Airline[];
}

const Table = ({ data }: TableProps) => {
  const [selectedRow, setSelectedRow] = useState<Airline | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (params: any) => {
    setSelectedRow(params.row);
    setIsModalOpen(true);
    console.log(params.row);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRow(undefined);
  };

  return (
    <div style={{ width: tableWidth }}>
      <div className="flex justify-between items-center bg-primary-100 p-2 p text-primary rounded-t-lg">
        <div>Total Airlines: {data.length}</div>
        <div>Last Updated: {new Date().toLocaleDateString()}</div>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        hideFooter
        autoHeight
        onRowClick={handleRowClick}
        sx={{
          fontSize: "14px",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f0f0f0",
            color: "#333",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnHeader": {
            // border: "solid 1px #e0e0e0",
          },
          "& .MuiDataGrid-row": {
            cursor: "pointer",
            "&:nth-child(even)": {
              backgroundColor: "#fafafa",
            },
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#efefef",
          },
        }}
      />
      {selectedRow && (
        <InfoModal
          open={isModalOpen}
          onClose={handleModalClose}
          airline={selectedRow}
        />
      )}
    </div>
  );
};

export default Table;
