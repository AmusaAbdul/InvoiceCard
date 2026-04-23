import { useParams, useNavigate } from "react-router-dom";
import invoices from '../../Invoice'
import BillFrom from "./subInvoicePage/BillFrom";
import BillTo from "./subInvoicePage/BillTo";
import InvoiceTerms from "./subInvoicePage/InvoiceTerms";
import ItemList from "./subInvoicePage/ItemList";
import { useState } from 'react';   


const InvoiceEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }

    const [formData, setFormData] = useState(invoice);  


    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log(formData); // 🔥 THIS IS YOUR UPDATED DATA
        navigate(`/invoice/${id}`);
    };

    return (
        <form onSubmit={handleSave} className="p-4 sm:p-6 w-full mx-auto bg-slate-800 text-white  sm:max-w-5xl space-y-6 shadow-lg">
            <p className="text-xl font-bold">Edit {invoice.id}</p>

            <BillFrom formData={formData} handleChange={handleChange} />
            <BillTo formData={formData} handleChange={handleChange} />
            <InvoiceTerms formData={formData} handleChange={handleChange} />
            <ItemList formData={formData} handleChange={handleChange} />

            <div className="flex justify-end items-center gap-4">
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                    Cancel
                </button>
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    Save Invoice
                </button>
            </div>
        </form>
    )
}

export default InvoiceEdit
