import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"


const ItemList = ({formData, handleChange}) => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }


  return (
     <div className="space-y-4 mt-13">
                <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wide">
                    Item List
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="itemName1">Item Name</label>
                        <input required name="itemName1" value={formData.itemName1} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName1" />
                        <input required name="itemName2" value={formData.itemName2} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="quantity1">Quantity</label>
                        <input required name="quantity1" value={formData.quantity1} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity1" />
                        <input required name="quantity2" value={formData.quantity2} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity2" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="price1">Price</label>
                        <input required name="price1" value={formData.price1} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price1" />
                        <input required name="price2" value={formData.price2} onChange={handleChange} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price2" />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                            Delete
                        </button>

                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                            Add Item
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:hidden">

                    {[{
                        name: invoice.itemName1,
                        qty: invoice.quantity1,
                        amount: invoice.price1
                    }, {
                        name: invoice.itemName2,
                        qty: invoice.quantity2,
                        amount: invoice.price2
                    }].map((item, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg">
                            <h3 className="font-semibold">{item.name}</h3>

                            <div className="flex justify-between text-sm text-gray-400 mt-2">
                                <span>{item.qty} * {item.amount}  </span>
                                <span className="font-semibold text-white">
                                    {invoice.currency}{item.amount}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
  )
}

export default ItemList
