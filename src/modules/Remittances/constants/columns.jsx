import ActionCell from "../components/ActionCell";

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
  },
  {
    field: "phone_number",
    numeric: false,
    headerName: "Teléfono",
  },
  {
    field: "cardNumber",
    headerName: "Tarjeta",
    flex: 0.4,
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
    flex: 0.4,
    headerName: "Proveedor",
    roles: ["admin", "provider"],
  },
  {
    field: "Actions",
    headerName: "Acciones",
    type: "actions",
    width: 120,
    renderCell: ActionCell, // Prevents row selection on click
    roles: ["seller"],
  },
];

//roles: ["admin", "seller", "provider"],
