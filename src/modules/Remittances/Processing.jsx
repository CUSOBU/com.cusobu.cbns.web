import DataTable from "./components/DataTable";

const Processing = () => {
  return (
    <DataTable
      status={["Pending", "Delivery"]}
      startDate="2023-06-20"
      endDate="2023-12-29"
    />
  );
};

export default Processing;
