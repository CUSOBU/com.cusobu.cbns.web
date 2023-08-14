import {renderTopupsActions} from "../components/ActionCell";

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
        field: "id",
        headerName: "id",
        flex: 1,
    },
    // {
    //     field: "topupId",
    //     headerName: "Oferta",
    //     flex: 1,
    // },
    {
        field: "budget",
        headerName: "Cobrado",
        numeric: true,
        flex: 1
    },
    {
        field: "cost",
        headerName: "Costo",
        numeric: true,
        flex: 1,
        roles: ["seller", "admin"],
    },
    {
        field: "amount",
        headerName: "Recarga",
        numeric: true,
        flex: 1
    },
    {
        field: "status",
        headerName: "Estado",
        flex: 2
    },
    {
        field: "provider",
        headerName: "Proveedor",
        flex: 1,
        roles: ["admin", "provider"]
    },
    {
        field: "createdAt",
        headerName: "Fecha",
        flex: 2
    },
    {
        field: "updatedAt",
        headerName: "Actualizado",
        flex: 2
    },
    {
        field: "Actions",
        headerName: "Acciones",
        type: "actions",
        width: 150,
        renderCell: renderTopupsActions, // Prevents row selection on click
        roles: ["provider", "admin"],
    },
];

//roles: ["admin", "seller", "provider"],
