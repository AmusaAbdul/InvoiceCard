import { useParams, useNavigate } from "react-router-dom";
// import invoices from '../../Invoice'
import BillTo from "./subInvoicePage/BillTo";
import InvoiceTerms from "./subInvoicePage/InvoiceTerms";
import ItemList from "./subInvoicePage/ItemList";
import { useState, useEffect } from 'react';   


const InvoiceEdit = ({invoices,  onSave}) => {
    const { id } = useParams();
    const navigate = useNavigate();

   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        zip: "",
        state: "",
        country: "",
        address: "",
        date: "",
        content: "",
        itemName1: "",
        itemName2: "",
        quantity1: "",
        quantity2: "",
        price1: "",
        price2: ""
    });  

    useEffect(() => {
        const found = invoices.find((inv) => inv.id === id);    
        setFormData(found);
    }, [id, invoices]);

    if  (!formData) {
        return <h2>Loading...</h2>;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave(formData);
        navigate(`/invoice/${id}`);

    };

    

    return (
        <form onSubmit={handleSave} className="p-4 sm:p-6 w-full mx-auto bg-slate-800 text-white  sm:max-w-5xl space-y-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate(`/invoice/${invoices.id}`)}
                    className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
                >
                    ← Go Back
                </button>
            </div>
            
            <p className="text-xl font-bold">Edit {formData.id}</p>

            <div className="space-y-4">
                <h2 className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                    Bill From
                </h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="street" className="text-sm text-slate-300">
                        Street Address
                    </label>

                    <input
                        id="street"
                        type="text"
                        name="address"
                        required
                        value={formData.address || ""}
                        onChange={handleChange}
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <div className="flex flex-col justify-between text-sm  sm:flex-row mt-4 gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="city">City</label>
                            <input name="state" value={formData.state || ""}  required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"
                            onChange={handleChange} />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input name="zip" value={formData.zip || ""} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"
                            onChange={handleChange} />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">Country</label>
                            <input name="country" value={formData.country || ""} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"
                            onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
            <BillTo formData={formData} handleChange={handleChange} />
            <InvoiceTerms formData={formData} handleChange={handleChange} />
            <ItemList formData={formData} handleChange={handleChange} />

            <div className="flex justify-end items-center gap-4">
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    Save Invoice
                </button>
            </div>
        </form>
    )
}

export default InvoiceEdit
