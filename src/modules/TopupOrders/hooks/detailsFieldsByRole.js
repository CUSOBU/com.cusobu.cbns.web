import { fields } from "../constants/details";

export const useFieldsByRole = (rol) =>
  fields.filter((col) => !col.roles || (col.roles && col.roles.includes(rol)));
