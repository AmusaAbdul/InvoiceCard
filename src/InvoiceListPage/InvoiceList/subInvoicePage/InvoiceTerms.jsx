import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"

const InvoiceTerms = () => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }


  return (
      <div className="space-y-4 mt-13">
          <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="Date">Invoice Date</label>
              <input placeholder={invoice.date} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="date" id="Date" />
          </div>

          <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="Description">Project Description</label>
              <input placeholder={invoice.content} className="bg-slate-700 w-full text-white placeholder:text-slate-400 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" type="text" id="Description" />
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
  )
}

export default InvoiceTerms
