import { fetchFilteredPoems } from "@/lib/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";


const PoemsTable = async({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {

  const poems = await fetchFilteredPoems(query, currentPage);
  console.log(poems);
  


  return (<div>PoemsTable
    <DataTable columns={columns} data={poems} />
  </div>);
};
export default PoemsTable;
