import BillFrom from "./Bill/BillFrom"
import BillTo from "./Bill/BillTo"
import IssueDate from "./Bill/IssueDate"
import ItemList from "./Bill/ItemList"
import { useNavigate } from "react-router-dom"

const NewInvoice = ({ invoice, setInvoice, newInvoice, setNewInvoice, handleNewInvoice, items, handleItemChange, deleteItem, addItem }) => {
    const navigate = useNavigate()
    const handleSaveAndSend = (status, e) => {
        e.preventDefault()
        setInvoice(prev => [...prev, {
            ...newInvoice, status: status, streetAdd: newInvoice.streetAddress, city: newInvoice.city,
            postCode: newInvoice.postCode, country: newInvoice.country, clientName: newInvoice.clientName,
            clientEmail: newInvoice.clientEmail, streetAdd2: newInvoice.streetAdd2, city2: newInvoice.city2,
            postCode2: newInvoice.postCode2, country2: newInvoice.country2, issueDate: newInvoice.issueDate,
            paymentTerms: newInvoice.paymentTerms, projDecrpt: newInvoice.projDecrpt, items: newInvoice.items,
            id: ("SP" + Math.floor(Math.random() * 5000)),
        }])
        setNewInvoice({
            streetAdd: "", city: "", postCode: "", country: "", clientName: "", clientEmail: "", streetAdd2: "",
            city2: "", postCode2: "", country2: "", issueDate: "", paymentTerms: "", projDecrpt: "", items: ""
        })
        navigate("/")
    }
    const discardInvoice = (e) => {
        e.preventDefault()
        setInvoice(invoice)
        navigate("/")
    }

    return (
        <form action="" className="sm:max-w-[50%]">
            <button onClick={() => navigate(`/`)} className="shadow-sm shadow-blue-800 p-2 m-4">Go back</button>
            <h1 className="text-xl font-bold p-4">New Invoice</h1>
            <BillFrom invoice={invoice} newInvoice={newInvoice} setNewInvoice={setNewInvoice} handleNewInvoice={handleNewInvoice} />
            <BillTo invoice={invoice} newInvoice={newInvoice} setNewInvoice={setNewInvoice} handleNewInvoice={handleNewInvoice} />
            <IssueDate invoice={invoice} newInvoice={newInvoice} setNewInvoice={setNewInvoice} handleNewInvoice={handleNewInvoice} />
            <ItemList items={items} handleItemChange={handleItemChange} deleteItem={deleteItem} addItem={addItem} />
            <div className="flex justify-between gap-5 bg-blue-800 p-4 ">
                <button onClick={discardInvoice} className="bg-white text-sm text-blue-800 p-2 rounded-full hover:bg-blue-700 hover:text-white">Discard</button>
                <span className="flex gap-3">
                    <button type="button" onClick={(e) => handleSaveAndSend("Draft", e)} className="bg-white text-sm text-blue-800 p-2 rounded-full hover:bg-blue-700 hover:text-white">Save as Draft</button>
                    <button type="button" onClick={(e) => handleSaveAndSend("Pending", e)} className="bg-white text-sm text-blue-800 p-2 rounded-full hover:bg-blue-700 hover:text-white">Save & Send</button>
                </span>
            </div>
        </form>
    )
}

export default NewInvoice
