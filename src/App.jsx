import Header from './InvoiceListPage/Header'
import FilterPage from './InvoiceListPage/FilterPage'
import InvoiceCard from './InvoiceListPage/InvoiceList/InvoiceCard'
import InvoiceDetail from "./InvoiceListPage/InvoiceList/InvoiceDetails";
import Invoices from "./Invoice"
import InvoiceEdit from './InvoiceListPage/InvoiceList/InvoiceEdit'
import InvoiceNew from './InvoiceListPage/InvoiceList/InvoiceNew'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [filter, setFilter] = useState("All");
  const [newInvoice, setNewInvoice] = useState({
    address :  "",
    state :"", 
    zip : "", 
    country : "",
    name : "",
    email : "",
    content: "",
    itemName1: "",
    itemName2: "",
    quantity1: "",
    quantity2: "",
    price1: "",
    price2: ""
    
})

  function handleNewInvoice(e) {
    const {name, value} = e.target
    setNewInvoice(prev => ({...prev, [name] : value}))
  }

  const [invoices, setInvoices] = useState(Invoices);
  const [editedInvoice, setEditedInvoice] = useState(null)

  const handleUpdatedInvoice = (updatedInvoice) => {
    const updatedList = invoices.map((inv) =>
      String(inv.id) === String(updatedInvoice.id)
        ? updatedInvoice
        : inv
    );

    setInvoices(updatedList);
  };

  const markAsPaid = (id) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        String(inv.id) === String(id) && inv.status === "Pending"
          ? { ...inv, status: "Paid" }
          : inv
      )
    );
  }

  const deleteInvoice = (id) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  const filteredInvoices =
    filter === "All"
      ? invoices
      : invoices.filter(invoice => invoice.status === filter);


  const noOfInvoices = filteredInvoices.length

    
  return (
    <BrowserRouter>
      <div className=' flex flex-col gap-4  sm:flex-row'>
        < Header />
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <FilterPage filter={filter} setFilter={setFilter} noOfInvoices={noOfInvoices}  />
                <InvoiceCard filter={filter} filteredInvoices={filteredInvoices}  invoices={invoices} deleteInvoice={deleteInvoice} />
              </>
            } />
            <Route path="/invoice/new" element={<InvoiceNew handleNewInvoice={handleNewInvoice} invoices={invoices} setInvoices={setInvoices} newInvoice={newInvoice} setNewInvoice={setNewInvoice} />} />
            <Route path="/invoice/:id" element={<InvoiceDetail invoices={invoices} markAsPaid={markAsPaid}  deleteInvoice={deleteInvoice} />} />
            <Route
              path="/invoice/:id/edit"
              element={
                <InvoiceEdit
                  onSave={handleUpdatedInvoice}
                  invoices={invoices}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
