import TableTransaction from "./TableTransaction"
import { loanColumns } from "../assets/table.js"
import { useQuery } from "@tanstack/react-query"
import moment from 'moment'



const Loan = () => {

    let { data: loan, isSuccess } = useQuery({
        queryFn: async () => {
            const raw = await fetch('http://localhost:3006/loan')
            const data = await raw.json()
            const remakeLoan = data.map((item : any)=>{
                return {...item, 
                    borrow_at: moment(item.borrow_at).format('LLLL'),
                    done_at: moment(item.done_at).format('LLLL')
                }
            })
            return remakeLoan
        },
        queryKey: ['loan'],
        refetchInterval: 1500
    })
    


    if(isSuccess){
        return (
            <div className="overflow-x-auto rounded-md col-span-2 bg-white p-2 row-span-2">
                <TableTransaction columns={loanColumns} datas={loan} tipe='loan'/>
            </div>
        )
    }

}

export default Loan