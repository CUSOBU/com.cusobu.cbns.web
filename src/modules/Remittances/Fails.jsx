import DataTable from "./components/DataTable";

const Fails = () => {
  return (
    <DataTable
      status={["Cancel"]}
      startDate="2023-06-20"
      endDate="2023-12-29"
    />
  );
};

export default Fails;
