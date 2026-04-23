import React from 'react'
import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"

const DetailsList = () => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }


  return (
      <div className="bg-slate-800 rounded-[10px 10px 0 0] mt-6 p-4">
          <div className="hidden sm:block">
              <table className="w-full text-left">
                  <thead className="text-gray-400 text-sm">
                      <tr>
                          <th>Item</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Total</th>
                      </tr>
                  </thead>

                  <tbody className="text-white">
                      <tr>
                          <td>{invoice.itemName1}</td>
                          <td>{invoice.quantity1}</td>
                          <td>{invoice.currency} {invoice.price}</td>
                          <td>{invoice.currency} {(invoice.quantity1 * invoice.price).toFixed(2)}</td>
                      </tr>

                      <tr>
                          <td>{invoice.itemName2}</td>
                          <td>{invoice.quantity2}</td>
                          <td>{invoice.currency} {invoice.price}</td>
                          <td>{invoice.currency} {(invoice.quantity2 * invoice.price).toFixed(2)}</td>
                      </tr>
                  </tbody>
              </table>
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
                          <span>{item.qty} x {invoice.currency}{invoice.price}</span>
                          <span className="font-semibold text-white">
                              {invoice.currency} {(item.qty * invoice.price).toFixed(2)}
                          </span>
                      </div>
                  </div>
              ))}

          </div>
      </div>
  )
}

export default DetailsList
