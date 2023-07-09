export const DIALOG_NAMESPACE = "DETAILS_REMITTANCES";
export const fields = [
  {
    field: "identifier",
    headerName: "Id",
  },
  {
    field: "email",
    headerName: "Usuario",
    roles: ["admin"],
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
    headerName: "Monto (Enviado)",
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
    headerName: "Costo",
    roles: ["seller", "admin"],
  },
  {
    field: "budget_currency",
    headerName: "Moneda (Pago)",
    roles: ["seller", "admin"],
  },
  {
    field: "status",
    headerName: "Estado",
  },
  {
    field: "statusCode",
    headerName: "Código Estado",
  },
  {
    field: "source_reference",
    headerName: "Referencia",
    roles: ["admin"],
  },
  {
    field: "createdAt",
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
    roles: ["admin", "provider", "seller"],
  },
];

//roles: ["admin", "seller", "provider"],
