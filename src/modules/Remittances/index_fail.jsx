import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { authAPI } from "../../services/EntityApiServices";
import { columns } from "./columns";

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0
  
  });

  const fetchData = async () => {
    try {
      let response = await authAPI.get(`/remittances?page=${paginationModel.page + 1}&pageSize=${paginationModel.pageSize}&status=Cancel`);
      // let response = await authAPI.get("/remittances?page=1&process_status=pending&pageSize=10");
      setData(response.remittances);
      setLoading(false);
    } catch (err) {
      //setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [paginationModel]);

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
            paginationModel: paginationModel,
          },
        }}
        pageSizeOptions={[1, 10, 20]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        checkboxSelection
      />
    </Container>
  );
};

export default DataTable;
