import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"

const BillFrom = ({ formData, handleChange }) => {
   

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }

  return (
          <div className="space-y-4">
              <h2 className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                  Bill From
              </h2>

              <form className="flex flex-col gap-2">
                  <label htmlFor="street" className="text-sm text-slate-300">
                      Street Address
                  </label>

                  <input
                      id="street"
                      type="text"
                      required
                      onChange={(e) => handleChange('street', e.target.value)}
                      placeholder={invoice.address}
                      className="w-full bg-slate-700 text-white placeholder:text-slate-400 
                        border border-slate-600 rounded-lg px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition"
                  />

                  <div className="flex flex-col justify-between text-sm  sm:flex-row mt-4 gap-4">
                      <div className="flex flex-col items-start gap-2">
                          <label htmlFor="city">City</label>
                          <input required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" 
                          placeholder={invoice.city} onChange={(e) => handleChange('city', e.target.value)} />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                          <label htmlFor="zip">Zip Code</label>
                          <input required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" 
                          placeholder={invoice.zip} onChange={(e) => handleChange('zip', e.target.value)} />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                          <label htmlFor="country">Country</label>
                          <input required className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" 
                          placeholder={invoice.country} onChange={(e) => handleChange('country', e.target.value)} />
                      </div>
                  </div>
              </form>
          </div>
  )
}

export default BillFrom
