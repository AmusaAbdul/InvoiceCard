import React from 'react'
import { useParams } from "react-router-dom";
// import invoices from "../../../Invoice"

const InvoiceFeatures = ({invoices}) => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }
  return (

      <div className="bg-slate-900 text-white rounded-xl p-6 mt-6 shadow space-y-6">

          <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div>
                  <h2 className="font-bold text-lg">{invoice.id}</h2>
                  <p className="text-sm text-gray-400">{invoice.content}</p>
              </div>

              <div className="text-sm text-gray-400 text-left sm:text-right">
                  <p>{invoice.address}</p>
                  <p>{invoice.state}</p>
                  <p>{invoice.zip}</p>
                  <p>{invoice.country}</p>
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">

              <div>
                  <p className="text-gray-400">Invoice Date</p>
                  <h3 className="font-semibold">{invoice.date}</h3>

                  <p className="text-gray-400 mt-4">Payment Due</p>
                  <h3 className="font-semibold">{invoice.date}</h3>
              </div>

              <div>
                  <p className="text-gray-400">Bill To</p>
                  <h3 className="font-semibold">{invoice.name}</h3>
                  <p className="text-gray-400">
                      {invoice.address}<br />
                      {invoice.state}, {invoice.zip}<br />
                      {invoice.country}
                  </p>
              </div>

              <div>
                  <p className="text-gray-400">Sent To</p>
                  <h3 className="font-semibold">{invoice.email}</h3>
              </div>

          </div>
      </div>
  )
}

export default InvoiceFeatures
