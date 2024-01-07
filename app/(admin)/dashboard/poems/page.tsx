import { poemColumns as columns } from "@/components/dashboard/poems/poem.columns";
import { DataTable } from "@/components/ui/data-table";
import Pagination from "@/components/ui/pagination";
import { fetchPoemsPages, getAllPoems, fetchFilteredPoems } from "@/lib/data";
import { PoemFormProps } from "@/lib/definitions";
import { useState, useEffect } from "react";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;
  const totalPages = await fetchPoemsPages(query);
  const poems = await fetchFilteredPoems(query, currentPage);

  return (
    <div>
      poems
      <DataTable columns={columns} data={poems} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default page;
