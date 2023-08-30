import { useMutation, useQueryClient } from "@tanstack/react-query"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import moment from "moment"
// import fakeData from "../assets/MOCK_DATA.json"


const TableTransaction = ({ columns, datas, tipe }: any) => {

  const queryClient = useQueryClient();

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const data = useMemo(() => datas, [datas])


  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filtering
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering

  })

  const { mutate } = useMutation({
    mutationFn: async (object) => {
      const { idLoan, idBook } = object
      const data = await fetch(`http://localhost:3006/change-status`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idLoan, idBook
        })
      })
      return data
    },
    mutationKey: ['status'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['loan'] })
    }
  })


  if(datas){
    if (tipe == 'loan') {
      return (
        <div className="table col-start-2 col-span-3 row-span-2">
          <input type="text" onChange={e => setFiltering(e.target.value)} placeholder="Search at here!" className="p-1 bg-base-200 rounded-md ml-[110px] p-2 w-[200px] border-2 border-base-200" />
          <table className="table-zebra mx-auto">
            <thead className="text-center">
              {
                table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} id={headerGroup.id}>
                    {
                      headerGroup.headers.map(header => (
                        <th key={header.index} id={header.id} onClick={header.column.getToggleSortingHandler()}>
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
                  <tr key={row.id} id={row.id}>
                    {
                      row.getVisibleCells().map((cell, i) => (
                        <>
                          {
                            i !== 6 ? (
                              <td key={cell.id}>
                                {
                                  flexRender(
                                    cell.column.columnDef.cell, cell.getContext()
                                  )
                                }
                              </td>
                            ) :
                              (
                                <td key={cell.id} onClick={() => mutate({
                                  idLoan: cell.row.original.id,
                                  idBook: cell.row.original.books[0].id
                                })} className="cursor-pointer">
                                  delete
                                </td>
                              )
                          }
                        </>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="btn-group bg-sky-500 mt-2 w-full flex justify-center">
            <button className="btn btn-active" onClick={() => table.setPageIndex(0)}>first page</button>
            <button disabled={!table.getCanPreviousPage()} className="btn" onClick={() => table.previousPage()}>previous page</button>
            <button disabled={!table.getCanNextPage()} className="btn" onClick={() => table.nextPage()}>next page</button>
            <button className="btn" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>last page</button>
          </div>
          {
            success && (
              <div className="toast toast-start">
                <div className="alert alert-success">
                  <span>Kamu berhasil menghapus Buku.</span>
                </div>
              </div>
            )
          }
          {error && (
            <div className="toast toast-start">
              <div className="alert alert-info">
                <span>Kamu gagal menghapus Buku.</span>
              </div>
            </div>
          )
          }
        </div>
  
      )
    } else {
      return (
        <div className="table col-start-2 col-span-3 row-span-2">
          <input type="text" onChange={e => setFiltering(e.target.value)} placeholder="Search at here!" className="p-1 bg-base-200 rounded-md ml-[110px] p-2 w-[200px] border-2 border-base-200" />
          <table className="table-zebra mx-auto">
            <thead className="text-center">
              {
                table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} id={headerGroup.id}>
                    {
                      headerGroup.headers.map(header => (
                        <th key={header.index} id={header.id} onClick={header.column.getToggleSortingHandler()}>
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
                table.getRowModel().rows.map((row, idRow) => (
                  <tr key={row.id} id={row.id}>
                    {
                      row.getVisibleCells().map((cell, id) => (
                        id != 1 ? 
                          id != 2 ? (
                            <td key={cell.id}>
                              {
                                flexRender(
                                  cell.column.columnDef.cell, cell.getContext()
                                )
                              }
                            </td>
                          ) : (
                            <td key={cell.id}>
                              {
                               moment( flexRender(
                                cell.column.columnDef.cell, cell.getContext()
                              )).format('LLLL')
                              }
                            </td>
                          ) 
                          : (
                          <td key={cell.id}>
                              {
                                cell.row.original?.loan?.length > 0 && cell.row.original?.loan[0]?.name
                              }
                          </td>
                        )
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="btn-group bg-sky-500 mt-2 w-full flex justify-center">
            <button className="btn btn-active" onClick={() => table.setPageIndex(0)}>first page</button>
            <button disabled={!table.getCanPreviousPage()} className="btn" onClick={() => table.previousPage()}>previous page</button>
            <button disabled={!table.getCanNextPage()} className="btn" onClick={() => table.nextPage()}>next page</button>
            <button className="btn" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>last page</button>
          </div>
          {
            success && (
              <div className="toast toast-start">
                <div className="alert alert-success">
                  <span>Kamu berhasil menghapus Buku.</span>
                </div>
              </div>
            )
          }
          {error && (
            <div className="toast toast-start">
              <div className="alert alert-info">
                <span>Kamu gagal menghapus Buku.</span>
              </div>
            </div>
          )
          }
        </div>
      )
    }
  }




}
export default TableTransaction
