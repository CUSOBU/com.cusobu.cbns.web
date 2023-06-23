import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import apiClient from "../../services/EntityApiServices";

const columns = [
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 220,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 70,
  },
  {
    field: "product",
    headerName: "Product",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 160,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    width: 160,
  },
];

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/buy");
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <DataGrid
      width="100vw"
      rows={data}
      loading={loading}
      error={error}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default DataTable;
