import { useNavigate } from "react-router-dom";


const InvoiceNew = ({ setInvoices, newInvoice, setNewInvoice, handleNewInvoice}) => {
    const navigate = useNavigate();


    const handleSaveAndSend = (status,  e) => {
        e.preventDefault()
        // Implementation for saving and sending the invoice
        setInvoices(prev => [...prev,
            { ...newInvoice, 
                id: "RT" + Math.floor(Math.random() * 10000).toString().padStart(4, "0"),
                content: newInvoice.content, itemName1: newInvoice.itemName1, itemName2: newInvoice.itemName2,
                name: newInvoice.name, quantity1: Number(newInvoice.quantity1), 
                quantity2: Number(newInvoice.quantity2), price2: Number(newInvoice.price2),
                date: "2021-08-25", currency: "£" , price1: Number(newInvoice.price1) ,  status: status,
                email: newInvoice.email ,   
                address: newInvoice.address, state: newInvoice.state, zip: newInvoice.zip, 
                country: newInvoice.country
            }])

        setNewInvoice({
            address: "",
            state: "",
            zip: "",
            country: "",
            name: "",
            email: "",
            content: "",
            itemName1: "",
            itemName2: "",
            quantity1: "",
            quantity2: "",
            price1: "",
            price2: ""
        }) 

            
        navigate("/"); // Redirect to the invoice list after saving
    };


    return ( 
        <form  className="p-4 sm:p-6 w-full mx-auto bg-slate-800 text-white  sm:max-w-5xl space-y-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate("/")}
                    className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
                >
                    ← Go Back
                </button>
            </div>
            <p className="text-xl font-bold">New Invoice </p>
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
                        required
                        name="address"
                        value={newInvoice.address}
                        onChange={handleNewInvoice}
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <div className="flex flex-col justify-between text-sm  sm:flex-row mt-4 gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">City</label>
                            <input name="state" value={newInvoice.state} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input name="zip" value={newInvoice.zip} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">Country</label>
                            <input name="country" value={newInvoice.country} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 mt-13">
                <h2 className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                    Bill To
                </h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="street" className="text-sm text-slate-300">
                        Client's Name
                    </label>

                    <input
                        id="street"
                        type="text"
                        required
                        name="name"
                        value={newInvoice.name}
                        onChange={handleNewInvoice}
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <label htmlFor="street" className="text-sm mt-5 text-slate-300">
                        Client's Email
                    </label>

                    <input
                        id="street"
                        type="text"
                        required
                        name="email"
                        value={newInvoice.email }
                        onChange={handleNewInvoice}
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <label htmlFor="street" className="text-sm mt-5 text-slate-300">
                        Street Address
                    </label>

                    <input
                        id="street"
                        type="text"
                        required
                        name="address"
                        value={newInvoice.address}
                        onChange={handleNewInvoice}
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <div className="flex flex-col w-full justify-between text-sm  sm:flex-row mt-4 gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">City</label>
                            <input name="state" value={newInvoice.state} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input name="zip" value={newInvoice.zip} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">Country</label>
                            <input name="country" value={newInvoice.country} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mt-13">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Date">Invoice Date</label>
                    <input name="invoiceDate" value={newInvoice.invoiceDate}  onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="date" id="Date" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Description">content Description</label>
                    <input name="content" value={newInvoice.content} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="Description" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Date">Payment Terms</label>
                    <select required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" id="Date">
                        <option value="">Select Payment Terms</option>
                        <option value="Net 15">Net 15 Days</option>
                        <option value="Net 30">Net 30 Days</option>
                        <option value="Net 60">Net 60 Days</option>
                        <option value="Net 90">Net 90 Days</option>
                    </select>
                </div>
            </div>

            <div className="space-y-4 mt-13">
                <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wide">
                    Item List
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="itemName1">Item Name</label>
                        <input name="itemName1" value={newInvoice.itemName1} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName1" />
                        <input name="itemName2" value={newInvoice.itemName2} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="quantity1">Quantity</label>
                        <input name="quantity1" value={newInvoice.quantity1} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity1" />
                        <input name="quantity2" value={newInvoice.quantity2} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="amount">Price</label>
                        <input name="price1" value={newInvoice.price1} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price1" />
                        <input name="price2" value={newInvoice.price2} onChange={handleNewInvoice} required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price" />
                    </div>
                    <div className="flex justify-between items-center gap-2 mt-4">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                            Delete
                        </button>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                            Add Item
                    </button>
                </div>
            </div>
            <div className="flex justify-between  items-center gap-4">
                <button onClick={() => navigate("/")} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                    Discard
                </button>
                <div className="flex gap-3">
                    <button type="button" onClick={(e) => handleSaveAndSend("Draft", e)} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                        Save as Draft
                    </button>
                    <button type="button" onClick={(e) => handleSaveAndSend("Pending", e)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        Save & Send
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InvoiceNew
