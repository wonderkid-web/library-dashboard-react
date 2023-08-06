import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import fakeData from "../assets/MOCK_DATA.json"

const Table = () => {

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

  const data = useMemo(() => fakeData, [])

  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Authors",
      accessorKey: "authors",
    },
    {
      header: "User Id",
      accessorKey: "userId",
    },
    {
      header: "Book Id",
      accessorKey: "bookId",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Borrow Id",
      accessorKey: "borrowId",
    },
  ];


  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state:{
      sorting:sorting,
      globalFilter: filtering
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering

  })

  return (
    <div className="overflow-x-auto w-full">
      <input type="text" onChange={e=>setFiltering(e.target.value)} placeholder="Search at here!" className="p-1 rounded-md mx-2 border-2 border-red-500" />
      <table className="table-zebra">
        <thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr id={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <th id={header.id} onClick={header.column.getToggleSortingHandler()}>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.map(row => (
              <tr id={row.id}>
                {
                  row.getVisibleCells().map(cell => (
                    <td>
                      {
                        flexRender(
                          cell.column.columnDef.cell, cell.getContext()
                        )
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="btn-group bg-sky-500 mt-2">
        <button className="btn btn-active" onClick={()=> table.setPageIndex(0)}>first page</button>
        <button disabled={!table.getCanPreviousPage()} className="btn" onClick={()=> table.previousPage()}>previous page</button>
        <button disabled={!table.getCanNextPage()} className="btn" onClick={()=> table.nextPage()}>next page</button>
        <button className="btn" onClick={()=> table.setPageIndex(table.getPageCount() - 1)}>last page</button>
      </div>
    </div>
  )
}
export default Table