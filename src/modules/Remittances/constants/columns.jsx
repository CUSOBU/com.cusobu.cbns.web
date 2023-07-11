import { renderRemittenceActions } from "../components/ActionCell";
export const DIALOG_NAMESPACE_CANCEL = "CANCEL_REMITTANCES";
export const DIALOG_NAMESPACE_CONFIRM = "CONFIRM_REMITTANCES";

export default [
  {
    field: "email",
    headerName: "Usuario",
    roles: ["admin"],
    flex: 1,
  },
  {
    field: "identifier",
    headerName: "Id",
    width: 70,
  },
  {
    field: "full_name",
    headerName: "Nombre",
    flex: 1,
  },
  {
    field: "phone_number",
    numeric: false,
    headerName: "Teléfono",
    flex: 1,
  },
  {
    field: "cardNumber",
    headerName: "Tarjeta",
    flex: 1,
    minWidth: 200
  },
  {
    field: "remittance_amount",
    headerName: "Remesa",
    flex: 1,
  },
  {
    field: "remittance_currency",
    headerName: "Moneda",
    flex: 1,
  },
  {
    field: "budget_amount",
    headerName: "Cobrado",
    roles: ["seller", "admin"],
    flex: 1,
  },
  {
    field: "operation_cost",
    headerName: "Cobrado",
    roles: ["seller", "admin"],
    flex: 1,
  },
  {
    field: "budget_currency",
    headerName: "Budget Currency",
    roles: ["seller", "admin"],
    flex: 1,
  },
  {
    field: "status",
    headerName: "Estado",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Fecha",
    flex: 1,
  },
  {
    field: "provider",
    flex: 1,
    headerName: "Proveedor",
    roles: ["admin", "provider"],
  },
  {
    field: "Actions",
    headerName: "Acciones",
    type: "actions",
    width: 150,
    renderCell: renderRemittenceActions, // Prevents row selection on click
    roles: ["provider", "admin"],
  },
];

//roles: ["admin", "seller", "provider"],
