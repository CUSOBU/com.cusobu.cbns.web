import columns from "../constants/columns";

export const useColumnsByRole = (rol, action) =>
  columns.filter((col) => (!col.roles || (col.roles && col.roles.includes(rol))) && (!col.action || action === col.action ));
