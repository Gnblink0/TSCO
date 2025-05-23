export const columnWidths = {
  country: 130,
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
