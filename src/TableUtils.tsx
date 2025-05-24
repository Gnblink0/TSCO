import type { Dimension } from "./types";

export const columnWidths = {
  country: 100,
  name: 180,
  carryOnImperial: 150,
  carryOnMetric: 180,
  personalItemImperial: 150,
  personalItemMetric: 150,
};

// for the width of the table
export const tableWidth = Object.values(columnWidths).reduce(
  (acc, width) => acc + width,
  0
);

export const formatDimension = (dimension: Dimension | undefined): string => {
  if (!dimension) return "-";
  if (dimension.isLinear) {
    return `${dimension.linearValue} ${dimension.unit} in Linear`;
  }
  return `${dimension.length} x ${dimension.width} x ${dimension.height} ${dimension.unit}`;
};