const InvoiceNew = () => {
    return (
        <div className="p-4 sm:p-6 w-full mx-auto bg-slate-800 text-white  sm:max-w-5xl space-y-6 shadow-lg">
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
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <div className="flex flex-col justify-between text-sm  sm:flex-row mt-4 gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">City</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">Country</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
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
                        className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                    />

                    <div className="flex flex-col w-full justify-between text-sm  sm:flex-row mt-4 gap-4">
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">City</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="zip">Zip Code</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <label htmlFor="country">Country</label>
                            <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text"  />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mt-13">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Date">Invoice Date</label>
                    <input  className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="date" id="Date" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Description">Project Description</label>
                    <input  className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="Description" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300" htmlFor="Date">Payment Terms</label>
                    <select className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" id="Date">
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
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName1" />
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="quantity1">Quantity</label>
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity1" />
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="price1">Price</label>
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price1" />
                        <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price2" />
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
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                    Discard
                </button>
                <div className="flex gap-3">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition">
                        Save as Draft
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                        Save & Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InvoiceNew
