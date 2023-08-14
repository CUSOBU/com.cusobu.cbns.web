export const DIALOG_NAMESPACE = "DETAILS_REMITTANCES";
export const fields = [
  {
    field: "id",
    headerName: "Id",
  },
  {
    field: "email",
    headerName: "Usuario",
    roles: ["admin"],
  },
  {
    field: "senderName",
    headerName: "Nombre",
  },
  {
    field: "phoneNumber",
    headerName: "Teléfono",
  },
  {
    field: "budget",
    headerName: "Cobrado",
    roles: ["admin", "seller"],
  },
  {
    field: "cost",
    headerName: "Costo",
    roles: ["admin", "seller"],
  },
  {
    field: "amount",
    headerName: "Recarga",
  },
  {
    field: "status",
    headerName: "Estado",
  },
  {
    field: "createdAt",
    headerName: "Fecha",
    type: "date",
  },
  {
    field: "updatedAt",
    headerName: "Fecha",
    type: "date",
  },
  {
    field: "provider",
    headerName: "Proveedor",
    roles: ["admin", "provider"],
  },
  {
    field: "evidence",
    headerName: "Evidencia",
  },
];

//roles: ["admin", "seller", "provider"],
