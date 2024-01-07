import { paintingColumns } from "@/components/dashboard/painting/painting.columns";
import { DataTable } from "@/components/ui/data-table";
import Pagination from "@/components/ui/pagination";
import { fetchFilteredPaintings, fetchPaintingsPages } from "@/lib/data/paintings.data";


const page = async({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {

  const query = searchParams?.query || ''
  const currentPage = searchParams?.page || 1;
  const totalPages = await fetchPaintingsPages(query);
  const paintings = await fetchFilteredPaintings(query, currentPage);

  return (
    <div>
      <DataTable columns={paintingColumns} data={paintings} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
export default page