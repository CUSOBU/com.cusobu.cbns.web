export const DIALOG_NAMESPACE = "CREATE_TOPUPORDER";
export const fields = [
  {
    field: "email",
    headerName: "Usuario",
    roles: ["admin"],
  },
  {
    field: "identifier",
    headerName: "Id",
  },
  {
    field: "full_name",
    headerName: "Nombre",
  },
  {
    field: "phone_number",
    headerName: "Teléfono",
  },
  {
    field: "cardNumber",
    headerName: "Tarjeta",
  },
  {
    field: "remittance_amount",
    headerName: "Remesa",
  },
  {
    field: "remittance_currency",
    headerName: "Moneda",
  },
  {
    field: "budget_amount",
    headerName: "Cobrado",
    roles: ["seller", "admin"],
  },
  {
    field: "operation_cost",
    headerName: "Cobrado",
    roles: ["seller", "admin"],
  },
  {
    field: "budget_currency",
    headerName: "Budget Currency",
    roles: ["seller", "admin"],
  },
  {
    field: "status",
    headerName: "Estado",
  },
  {
    field: "createdAt",
    headerName: "Fecha",
  },
  {
    field: "provider",
    headerName: "Proveedor",
    roles: ["admin", "provider", "seller"],
  },
];

//roles: ["admin", "seller", "provider"],
