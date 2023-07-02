import {useState} from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";

const Table = ({ data = [], columns = [], loading = false, pageSize = 20, page = 0, pageSizeOptions= [1, 10, 20] }) => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize,
        page
      });
    

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
        pageSizeOptions={pageSizeOptions}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        checkboxSelection
      />
    </Container>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.boolean,
};

export default Table;
