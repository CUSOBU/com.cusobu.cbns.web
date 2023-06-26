import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import apiClient from "../../services/EntityApiServices";
import { formatDate } from "../../utils";

const columns = [
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    minWidth: 160,
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    minWidth: 220,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    flex: 1,
    align: "center",
    headerAlign: "center",
    minWidth: 70,
  },
  {
    field: "product",
    headerName: "Product",
    flex: 1,
    minWidth: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    flex: 1,
    minWidth: 140,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    flex: 1,
    minWidth: 130,
    align: "center",
    headerAlign: "center",
    renderCell: ({ value }) => formatDate(value),
  },
];

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/buy");
      setData(response);
      setLoading(false);
    } catch (err) {
      //setError(err);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl">
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        getRowId={(gridRow) => gridRow.id}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  );
};

export default DataTable;
