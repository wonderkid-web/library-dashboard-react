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
import ReducerBook from './Components/ReducerBook.tsx'
import ManageBook, { getAllBook as manage } from './ManageBook.tsx'
import Loan from './Components/Loan.tsx'
import Return from './Components/Return.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Dashboard />} />

      {/* Book Routes */}
      <Route path='/book' element={<Dashboard />} />
      <Route path='/book/add' element={<AddBook />} />
      <Route path='/book/remove' element={<DeleteBook />} loader={getAllBook} />
      <Route path='/book/manage' element={<ManageBook />} loader={manage} />

      {/* Transaction Routes */}
      <Route path='/transaction' element={<Transaction />} />
      <Route path='/transaction/loan' element={<Loan />} />
      <Route path='/transaction/return' element={<Return />} />


      <Route path='/reducer' element={<ReducerBook />} />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdminContextProvider>
        <RouterProvider router={router} />
      </AdminContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
