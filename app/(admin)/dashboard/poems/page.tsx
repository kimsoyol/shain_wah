import PoemsTable from "@/components/dashboard/poems/table";
import Pagination from "@/components/ui/pagination";
import { fetchPoemsPages, getAllPoems } from "@/lib/data";
import { PoemFormProps } from "@/lib/definitions";
import { useState, useEffect } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const query = searchParams?.query || ''
  const currentPage = searchParams?.page || 1;
  const totalPages = await fetchPoemsPages(query);
  
  return (
    <div>
      poems
      <PoemsTable query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
