import Header from "./Invoice/Header"
import Invoice from "./Invoice/Invoice"
import InvoiceCard from "./Invoice/InvoiceCard"
import NewInvoice from "./Invoice/NewInvoice"
import EditInvoice from "./Invoice/EditInvoice"
import InvoiceDetails from "./Invoice/InvoiceDetails"
import { useState, useEffect, } from "react"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


function App() {
  const [invoice, setInvoice] = useState(() => {
    const stored = localStorage.getItem("invoice")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("invoice", JSON.stringify(invoice))
  }, [invoice])
  const [filter, setFilter] = useState("All")
  const filteredInvoice = filter === "All" ? invoice : invoice.filter(inv => inv.status === filter)
  const noOfInvoice = filteredInvoice.length

  const [items, setItems] = useState([
    { item: "", qty: 0, price: 0, total: 0, },
    { item: "", qty: 0, price: 0, total: 0 }
  ])
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];

    newItems[index][field] = field === "item" ? value : Number(value);

    newItems[index].total = newItems[index].qty * newItems[index].price;

    setItems(newItems);
  };
  const addItem = () => {
    setItems([...items,
    { id: crypto.randomUUID(), item: "", qty: 0, price: 0, total: 0 }
    ])
  }
  const deleteItem = (index) => {
    const confirmDeleteItem = window.confirm("Are you sure")
    if (confirmDeleteItem) {
      setItems(items.filter(item => item.id !== index))
    }
  }
  const [newInvoice, setNewInvoice] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    streetAddress2: "",
    city2: "",
    postCode2: "",
    country2: "",
    issueDate: "",
    paymentTerms: "",
    projDecrpt: "",
    items: items,
  })
  const handleNewInvoice = (e) => {
    const { name, value } = e.target
    setNewInvoice(prev => ({ ...prev, [name]: value }))
  }

  const [editInvoice, setEditInvoice] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    streetAddress2: "",
    city2: "",
    postCode2: "",
    country2: "",
    issueDate: "",
    paymentTerms: "",
    projDecrpt: "",
    items: items || "",
  })

  const handleEditInvoice = (e) => {
    const { name, value } = e.target
    setEditInvoice(prev => ({ ...prev, [name]: value }))
  }

  const deleteInvoice = (id) => {
    setInvoice((prev) => prev.filter(inv => inv.id !== id))
  }

  const markAsPaid = (id) => {
    setInvoice(prev => prev.map(
      inv => inv.id === id && inv.status === "Pending" ? { ...inv, status: "Paid" } : inv
    ))
  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Invoice invoice={invoice} noOfInvoice={noOfInvoice} filter={filter} setFilter={setFilter} />
              <InvoiceCard filteredInvoice={filteredInvoice} invoice={invoice} />
            </>
          } />
          <Route path="/invoice/new" element={
            <NewInvoice items={items} setInvoice={setInvoice}
              handleItemChange={handleItemChange} deleteItem={deleteItem}
              addItem={addItem} invoice={invoice} newInvoice={newInvoice}
              setNewInvoice={setNewInvoice} handleNewInvoice={handleNewInvoice}
            />
          } />
          <Route path="/invoice/:id" element={
            <InvoiceDetails invoice={invoice} deleteInvoice={deleteInvoice} markAsPaid={markAsPaid}
            />} />
          <Route path="/invoice/:id/edit" element={<EditInvoice
            items={items} setInvoice={setInvoice} setItems={setItems}
            handleItemChange={handleItemChange} deleteItem={deleteItem}
            addItem={addItem} invoice={invoice} editInvoice={editInvoice}
            setEditInvoice={setEditInvoice} handleEditInvoice={handleEditInvoice}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
