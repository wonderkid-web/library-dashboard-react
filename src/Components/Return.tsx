import { returnColumns } from "../assets/table.js"
import { useQuery } from "@tanstack/react-query"
import TableTransaction from "./TableTransaction.js"



const Return = () => {

  let { data: returnData, isSuccess } = useQuery({
    queryFn: async () => {
      const raw = await fetch('http://localhost:3006/return')
      const data = await raw.json()
      return data.return
    },
    queryKey: ['return'],
    refetchInterval: 1000
  })



  if (isSuccess) {
    return (
      <div className="overflow-x-auto rounded-md col-span-2 bg-white p-2 row-span-2">
        <TableTransaction columns={returnColumns} datas={returnData} tipe='return' />
      </div>
    )
  }

}

export default Return