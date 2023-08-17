import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Components/RootLayout.tsx'
import AddBook from './Components/AddBook.tsx'
import { AdminContextProvider } from './context/AdminContext.tsx'
import Dashboard from './Components/Dashboard.tsx'
// import Table from './Components/Table.tsx'
import Transaction from './Transaction.tsx'
import DeleteBook, { getAllBook } from './Components/DeleteBook.tsx'
import Table from './Components/Table.tsx'
import ReducerBook from './Components/ReducerBook.tsx'
import ManageBook from './ManageBook.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Dashboard />} />
      
      {/* Book Routes */}
      <Route path='/book' element={<Dashboard />}/>
      <Route path='/book/add' element={<AddBook />} />
      <Route path='/book/remove' element={<DeleteBook />} loader={getAllBook} />
      <Route path='/book/manage' element={<ManageBook />} />

      {/* Transaction Routes */}
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/transaction/loan' element={<Transaction />} />
      <Route path='/transaction/return' element={<Transaction />} />


      <Route path='/reducer' element={<ReducerBook />} />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminContextProvider>
      <RouterProvider router={router}/>
    </AdminContextProvider>
  </React.StrictMode>,
)
