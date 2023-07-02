import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { authAPI } from "../../../services/EntityApiServices";
import Table from "../../../components/Table";
import { useColumnsByRole } from "../hooks/columnsByRole";

const DataTable = ({ status, startDate, endDate }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  const getColumns = useColumnsByRole(
    sessionStorage.getItem("roles") || "provider"
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table
      data={data}
      columns={getColumns}
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
};

export default DataTable;
