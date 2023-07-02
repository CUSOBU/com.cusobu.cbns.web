import DataTable from "./components/DataTable";

const Completed = () => {
  return (
    <DataTable
      status={["Complete"]}
      startDate="2023-06-20"
      endDate="2023-12-29"
    />
  );
};

export default Completed;
