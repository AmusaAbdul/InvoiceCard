import Header from './InvoiceListPage/Header'
import FilterPage from './InvoiceListPage/FilterPage'
import InvoiceCard from './InvoiceListPage/InvoiceList/InvoiceCard'
import InvoiceDetail from "./InvoiceListPage/InvoiceList/InvoiceDetails";
import Invoices from "./Invoice"
import InvoiceEdit from './InvoiceListPage/InvoiceList/InvoiceEdit'
import InvoiceNew from './InvoiceListPage/InvoiceList/InvoiceNew'

import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [filter, setFilter] = useState("All");
  const [invoices, setInvoices] = useState(Invoices);

  const markAsPaid = (id) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id && inv.status === "Pending"
          ? { ...inv, status: "Paid" }
          : inv
      )
    );
  }

  const deleteInvoice = (id) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  return (
    <BrowserRouter>
      <div className=' flex flex-col gap-4  sm:flex-row'>
        < Header />
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <FilterPage filter={filter} setFilter={setFilter} />
                <InvoiceCard filter={filter} invoices={invoices} deleteInvoice={deleteInvoice} />
              </>
            } />
            <Route path="/invoice/new" element={<InvoiceNew />} />
            <Route path="/invoice/:id" element={<InvoiceDetail invoices={invoices} markAsPaid={markAsPaid} deleteInvoice={deleteInvoice} />} />
            <Route path="/invoice/:id/edit" element={<InvoiceEdit />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
