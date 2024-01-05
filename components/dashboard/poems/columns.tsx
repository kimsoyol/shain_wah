import { PoemFormProps } from "@/lib/definitions"
import { ColumnDef } from "@tanstack/react-table"

type PoemColum = {
  id: number
  title: string | null
  author: string
  createdAt: Date
}

export const columns: ColumnDef<(PoemColum)>[]= [
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
    accessorKey: "createdAt",
    header: 'Created'
  },
]