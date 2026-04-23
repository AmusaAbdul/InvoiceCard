import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"


const ItemList = () => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }


  return (
     <form className="space-y-4 mt-13">
                <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wide">
                    Item List
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="itemName1">Item Name</label>
                        <input required placeholder={invoice.itemName1} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName1" />
                        <input required placeholder={invoice.itemName2} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName2" />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="quantity1">Quantity</label>
                        <input required  placeholder={invoice.quantity1} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="quantity1" />
                    <input required placeholder={invoice.itemName1} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="itemName1" />

                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label className="text-sm text-slate-300" htmlFor="price1">Price</label>
                        <input required placeholder={invoice.price} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="number" id="price1" />
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
                        qty: invoice.quantity1
                    }, {
                        name: invoice.itemName2,
                        qty: invoice.quantity2
                    }].map((item, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg">
                            <h3 className="font-semibold">{item.name}</h3>

                            <div className="flex justify-between text-sm text-gray-400 mt-2">
                                <span>{item.qty}  </span>
                                <span className="font-semibold text-white">
                                    {invoice.currency}{invoice.price}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </form>
  )
}

export default ItemList
