import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { authAPI } from "../../services/EntityApiServices";
import { columnsSeller, columnsAdmin, columnsProvider } from "./columns";

let columnsLoader = "";
if (sessionStorage.getItem("roles") === "seller") {
  columnsLoader = columnsSeller;
}else if (sessionStorage.getItem("roles") === "admin") {
  columnsLoader = columnsAdmin;
}else if (sessionStorage.getItem("roles") === "provider") {
  columnsLoader = columnsProvider;
}

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0
  });

  const fetchData = async () => {
    console.log("sessionStorage", sessionStorage);
    console.log("sessionStorage.user", sessionStorage.getItem("user"));
    try {
      let response = await authAPI.post(`/remittances/filter?page=1&pageSize=20`, 
                  {status:["Pending","Delivery"], startDate:"2023-06-20", endDate:"2023-12-29",});
      // let response = await authAPI.post(`/remittances/filter?page=${paginationModel.page + 1}&pageSize=${paginationModel.pageSize}&status=Pending&status=Delivery`);
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
        columns={columnsLoader}
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
