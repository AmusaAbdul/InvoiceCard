import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import BillFrom from "./EditBill/BillFrom"
import BillTo from "./EditBill/BillTo"
import IssueDate from "./EditBill/IssueDate"
import ItemList from "./EditBill/ItemList"

const EditInvoice = ({ invoice, setInvoice, editInvoice, setEditInvoice, handleEditInvoice, items, setItems, handleItemChange, deleteItem, addItem }) => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const found = invoice.find(inv => inv.id === id)
        if (found) {
            setEditInvoice(found)
            setItems(found.items)
        } 
    }, [id, invoice])

    const updateInvoice = (updateList) => {
        const updatedList = invoice.map(inv => inv.id === updateList.id ? updateList : inv)
        setInvoice(updatedList)
    }
    const cancelEdit = (e) => {
        e.preventDefault()
        navigate(`/invoice/${id}`)
    }
    const handleSaveChanges = (e) => {
        e.preventDefault()
        const updated = {
            ...editInvoice, items: items
        }
        updateInvoice(updated)
        navigate(`/invoice/${id}`)
    }


    return (
        <form action="" className="sm:max-w-[50%]">
            <button onClick={() => navigate(`/invoice/${editInvoice.id}`)} className="shadow-sm shadow-blue-800 p-2 m-4">Go back</button>
            <h1 className="text-xl font-bold p-4">Edit Invoice </h1>
            <BillFrom invoice={invoice} editInvoice={editInvoice} setEditInvoice={setEditInvoice} handleEditInvoice={handleEditInvoice} />
            <BillTo invoice={invoice} editInvoice={editInvoice} setEditInvoice={setEditInvoice} handleEditInvoice={handleEditInvoice} />
            <IssueDate invoice={invoice} editInvoice={editInvoice} setEditInvoice={setEditInvoice} handleEditInvoice={handleEditInvoice} />
            <ItemList items={items} setItems={setItems} handleItemChange={handleItemChange} deleteItem={deleteItem} addItem={addItem} invoice={invoice} editInvoice={editInvoice} setEditInvoice={setEditInvoice} handleEditInvoice={handleEditInvoice} />
            <div className="flex justify-end gap-5 bg-blue-800 p-4 ">
                <span className="flex gap-3">
                    <button type="button" onClick={cancelEdit} className="bg-blue-200 text-sm text-blue-700 hover:bg-blue-400 p-2 rounded-full">Cancel</button>
                    <button type="button" onClick={handleSaveChanges} className="bg-white text-sm text-blue-800 p-2 hover:bg-blue-700 hover:text-white rounded-full">Save Changes</button>
                </span>
            </div>
        </form>
    )
}

export default EditInvoice
