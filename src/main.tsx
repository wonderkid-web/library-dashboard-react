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
import DeleteBook from './Components/DeleteBook.tsx'
import Table from './Components/Table.tsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Dashboard />} />
      
      {/* Book Routes */}
      <Route path='/book' element={<Dashboard />}/>
      <Route path='/book/add' element={<AddBook />} />
      <Route path='/book/delete' element={<DeleteBook />} />
      <Route path='/book/table' element={<Table />} />

      {/* Transaction Routes */}
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/transaction/loan' element={<Transaction />} />
      <Route path='/transaction/return' element={<Transaction />} />


      <Route path='/dashboard' element={<h1>ini dashboard</h1>} />
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
