import { useLoaderData } from "react-router-dom"
import Table from "./Table";
import {deleteBook} from "../assets/table.js"

export const getAllBook = async () => {
  const raw = await fetch('http://localhost:3006/available')
  return raw.json()
}

interface DeletedBook {
  id: string;
  title: string;
  authors: string;
  userId?: string;
  bookId: string;
  category: string;
  image: string;
  stock: number;
  borrowId?: any;
}

const DeleteBook = () => {

  const books: DeletedBook = useLoaderData()
  

  return (
    // <div className="overflow-x-auto rounded-md col-span-2 bg-white">
    //   <table className="table">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th>
    //           <label>
    //             <input type="checkbox" className="checkbox" />
    //           </label>
    //         </th>
    //         <th>Book Name</th>
    //         <th>Authors</th>
    //         <th>Stock</th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* row 1 */}
    //       <tr>
    //         <th>
    //           <label>
    //             <input type="checkbox" className="checkbox" />
    //           </label>
    //         </th>
    //         <td>
    //           <div className="flex items-center space-x-3">
    //             <div className="avatar">
    //               <div className="mask mask-squircle w-12 h-12">
    //                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
    //               </div>
    //             </div>
    //             <div>
    //               <div className="font-bold">Hart Hagerty</div>
    //               <div className="text-sm opacity-50">United States</div>
    //             </div>
    //           </div>
    //         </td>
    //         <td>
    //           Zemlak, Daniel and Leannon
    //           <br />
    //           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    //         </td>
    //         <td>Purple</td>
    //         <th>
    //           <button className="btn btn-ghost btn-xs">details</button>
    //         </th>
    //       </tr>
    //     </tbody>
    //     {/* foot */}
    //     <tfoot>
    //       <tr>
    //         <th></th>
    //         <th>Name</th>
    //         <th>Job</th>
    //         <th>Favorite Color</th>
    //         <th></th>
    //       </tr>
    //     </tfoot>

    //   </table>
    // </div>
    <div className="overflow-x-auto rounded-md col-span-2 bg-white p-2 row-span-2">
      <Table columns={deleteBook} datas={books.data}  />
    </div>
  )
}

export default DeleteBook