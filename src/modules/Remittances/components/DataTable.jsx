import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";
import Table from "../../../components/Table";
import { useColumnsByRole } from "../hooks/columnsByRole";
import ActionCell from "./ActionCell";


const DataTable = ({ status, startDate, endDate, actions }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeRow = (identifier) => {
    setData(data => data.filter(row => row.identifier !== identifier));
  };

  const authAPI = new API(
    utils.api_url, // eslint-disable-line
    localStorage.getItem("token") || ""
  );

  const fetchData = async () => {
    try {
      let response = await authAPI.post(
        `/remittances/filter?page=1&pageSize=20`,
        {
          status,
          startDate,
          endDate,
        }
      );

      setData(response.remittances);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  let getColumns = useColumnsByRole(
    sessionStorage.getItem("roles") || "provider",
    actions
  );

  useEffect(() => {
    fetchData();
  }, [startDate, endDate, status]);

  return (
    <Table
      data={data}
      columns={getColumns.map(column => {
        if (column.field === 'Actions') {
          return {
            ...column,
            renderCell: (params) => <ActionCell row={params.row} removeRow={removeRow} />
          };
        }
        return column;
      })}
      loading={loading || false}
      page={0}
      pageSize={20}
      pageSizeOptions={[5, 10, 20]}
    />
  );
};

DataTable.propTypes = {
  status: PropTypes.array.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  actions: PropTypes.bool,
};

export default DataTable;
