import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";
import Table from "../../../components/Table";
import { useColumnsByRole } from "../hooks/columnsByRole";
import ActionCell from "./ActionCell";
import { Box, Grid } from "@mui/material";


const DataTable = ({ status, startDate, endDate, actions }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fetchDataFlag, setFetchDataFlag] = useState(false);

  const authAPI = new API(
    utils.api_url,
    localStorage.getItem("token") || ""
  );

  const fetchData = async () => {
    try {
      let response = await authAPI.post(
        `/topuporders/filter?page=1&pageSize=20`,
        {
          status,
          startDate,
          endDate,
        }
      );
      setData(await response.data);
    } catch (err) {
      setLoading(false);
    }
  };

  let getColumns = useColumnsByRole(
    sessionStorage.getItem("roles") || "provider",
    actions
  );

  useEffect(() => {
      if (!fetchDataFlag) {
          setLoading(true);
          fetchData().then(() => setLoading(false));
      }
      setFetchDataFlag(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, status, fetchDataFlag]);

  return (
    <Grid container>
      <Grid xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
        {data.map((entry, index) => 
          <Box key={index} sx={{border: "1px solid #cccccc", my:1, p:1, borderRadius: 2}}>
            <div>{`${entry.full_name}`}</div>
            <div>{`${entry.phone_number}`}</div>
            <div>{entry.cardNumber}</div>
            <div>{`$${entry.remittance_amount} ${entry.remittance_currency} - $${entry.budget_amount} ${entry.budget_currency}`}</div>
            <div>{`${entry.status}`}</div>
            <ActionCell row={entry} setFetchDataFlag={setFetchDataFlag} />
          </Box>
        )}
      </Grid>
      <Grid xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
        <Table
          data={data}
          columns={getColumns.map(column => {
            if (column.field === 'Actions') {
              return {
                ...column,
                renderCell: (params) => <ActionCell row={params.row} setFetchDataFlag={setFetchDataFlag} />
              };
            }
            return column;
          })}
          loading={loading || false}
          page={0}
          pageSize={20}
          pageSizeOptions={[5, 10, 20]}
        />
      </Grid>
    </Grid>
  );
};

DataTable.propTypes = {
  status: PropTypes.array.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  actions: PropTypes.bool,
};

export default DataTable;
