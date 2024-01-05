import PoemsTable from "@/components/dashboard/poems/table";
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

  console.log(totalPages);
  

  return (
    <div>
      poems
      <PoemsTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Page;
