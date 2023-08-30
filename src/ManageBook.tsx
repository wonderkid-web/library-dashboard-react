import { useLoaderData } from "react-router-dom"
import Table from "./Components/Table"
import { detailBook } from "./assets/table.js"

export const getAllBook = async () =>{
    const raw = await fetch('http://localhost:3006/book')
    const data = await raw.json()
    return data
}

  

const ManageBook = () => {
    const books: any = useLoaderData()

    return (
        <div className="bg-white overflow-x-auto rounded-md col-span-2 p-2 row-span-2">
            <Table columns={detailBook} datas={books.details} />
        </div>
    )
}

export default ManageBook