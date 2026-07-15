import { useParams, useNavigate } from "react-router-dom";
import Buttons from "./Detail/Buttons"
import EachId from "./Detail/EachId"
import ItemTotal from "./Detail/ItemTotal"

const InvoiceDetail = ({ invoice, deleteInvoice, markAsPaid }) => {
    const { id } = useParams()
    const findInvoice = invoice.find((inv) => inv.id === id)
    if (!findInvoice) {
        return (<h1>NO INVOICES FOUND</h1>)
    }
    const navigate = useNavigate()
    return (
        <div className="p-3 space-y-5">
            <button onClick={() => navigate("/")} className="shadow-sm shadow-blue-800 p-2">Go back</button>
            <Buttons findInvoice={findInvoice} deleteInvoice={deleteInvoice} markAsPaid={markAsPaid} />
            <EachId findInvoice={findInvoice} />
            <ItemTotal findInvoice={findInvoice} />
        </div>
    )
}

export default InvoiceDetail
