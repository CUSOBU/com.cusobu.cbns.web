import columns from "../constants/columns";

export const useColumnsByRole = (rol) =>
  columns.filter((col) => !col.roles || (col.roles && col.roles.includes(rol)));
