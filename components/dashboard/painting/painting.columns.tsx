"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

type PaintingColum = {
  id: number
  title: string | null
  author: string
  imgURL: string
  createdAt: Date
}

export const paintingColumns: ColumnDef<(PaintingColum)>[]= [
 
  {
    accessorKey: "id",
    header: 'Index'
  },
  {
    accessorKey: "title",
    header: 'Title'
  },
  {
    accessorKey: "author",
    header: 'Author'
  },
  {
    accessorKey: "imgURL",
    header: 'Painting/Photo'
  },
  {
    accessorKey: "books",
    header: 'Book'
  },
  {
    accessorKey: "createdAt",
    header: 'Created'
  },
  {
    id: 'actions',
    cell: ({ row })  => {
      const poem = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Details</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href={`/dashboard/paintings/${poem.id}`}> View Paintings details</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]