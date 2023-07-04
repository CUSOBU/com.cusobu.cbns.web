import ActionCell  from '../components/ActionCell';


export default [
  {
    field: "email",
    numeric: false,
    disablePadding: true,
    headerName: "Usuario",
    roles: ["admin"],
    flex: 1
  },
  {
    field: "identifier",
    numeric: false,
    disablePadding: true,
    headerName: "Id",
  },
  {
    field: "full_name",
    numeric: false,
    disablePadding: false,
    headerName: "Nombre",
  },
  {
    field: "phone_number",
    numeric: false,
    disablePadding: false,
    headerName: "Teléfono",
  },
  {
    field: "cardNumber",
    numeric: false,
    disablePadding: false,
    headerName: "Tarjeta",
    flex: 0.4

    ,
  },
  {
    field: "remittance_amount",
    numeric: false,
    disablePadding: false,
    headerName: "Remesa",
  },
  {
    field: "remittance_currency",
    numeric: false,
    disablePadding: false,
    headerName: "Moneda",
  },
  {
    field: "budget_amount",
    numeric: false,
    disablePadding: false,
    headerName: "Cobrado",
    roles: ["seller", "admin"]
  },
  {
    field: "operation_cost",
    numeric: false,
    disablePadding: false,
    headerName: "Cobrado",
    roles: ["seller", "admin"],
  },
  {
    field: "budget_currency",
    numeric: false,
    disablePadding: false,
    roles: ["seller", "admin"],
  },
  {
    field: "status",
    numeric: false,
    disablePadding: false,
    headerName: "Estado",
  },
  {
    field: "createdAt",
    numeric: false,
    disablePadding: false,
    headerName: "Fecha",
  },
  {
    field: "provider",
    numeric: false,
    disablePadding: false,
    flex: 0.4,
    headerName: "Proveedor",
    roles: ["admin", "provider"],
  },
  {
    field: 'Actions',
    headerName: 'Acciones',
    width: 220,
    renderCell: ActionCell,
    disableClickEventBubbling: true,
    roles: ["provider"],
    action: true
},
];

//roles: ["admin", "seller", "provider"],