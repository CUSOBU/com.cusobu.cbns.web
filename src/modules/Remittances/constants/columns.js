export default [
  {
    field: "email",
    numeric: false,
    disablePadding: true,
    headerName: "Usuario",
    roles: ["admin"],
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
    field: "source_reference",
    numeric: false,
    disablePadding: false,
    headerName: "Referencia",
    roles: ["admin", "seller", "provider"],
  },
  {
    field: "status",
    numeric: false,
    disablePadding: false,
    headerName: "Estado",
  },
];


//roles: ["admin", "seller", "provider"],