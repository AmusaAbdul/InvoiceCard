import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"


const BillTo = () => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }

  return (
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
                  // placeholder={}
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
                  placeholder={invoice.email}
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
                  placeholder={invoice.address}
                  className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
              />

              <div className="flex flex-col w-full justify-between text-sm  sm:flex-row mt-4 gap-4">
                  <div className="flex flex-col items-start gap-2">
                      <label htmlFor="country">City</label>
                      <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" placeholder={invoice.country} />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                      <label htmlFor="zip">Zip Code</label>
                      <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" placeholder={invoice.zip} />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                      <label htmlFor="country">Country</label>
                      <input className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" placeholder={invoice.country} />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default BillTo
