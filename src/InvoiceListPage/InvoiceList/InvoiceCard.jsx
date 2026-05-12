import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const InvoiceCard = ({filteredInvoices }) => {
    const navigate = useNavigate();


  
  return (
      <>
      <div className='flex flex-wrap  w-full justify-between gap-4 p-4 overflow-y-auto max-h-110 sm:overflow-hidden  sm:max-h-full sm:hidden'> 
          {filteredInvoices.map((invoice) => (
              <div onClick={() => navigate(`/invoice/${invoice.id}`)} key={invoice.id} className="bg-slate-200 dark:bg-slate-800 w-full p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col gap-3 ">

                  <div className="flex justify-between items-center">
                      <h1 className="font-bold dark:text-white">{invoice.id}</h1>
                      <p className="text-sm text-slate-500">{invoice.name}</p>
                  </div>

                  <p className="text-sm text-slate-500">
                      {invoice.date}
                  </p>

                  <div className="flex justify-between items-center">

                      <h1 className="font-bold dark:text-white">
                         {invoice.currency} {(invoice.quantity1 * invoice.price1 + invoice.quantity2 * invoice.price2).toFixed(2)}
                      </h1>

                      <span className="text-slate-400 text-lg">
                          &#9655;
                      </span>
                  </div>

                  <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold w-fit
                              ${invoice.status === "Paid"
                              ? "bg-green-100 text-green-600"
                              : invoice.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-gray-200 text-gray-600"
                          }`}
                  >
                      <div
                          className={`h-2 w-2 rounded-full
                                  ${invoice.status === "Paid"
                                  ? "bg-green-500"
                                  : invoice.status === "Pending"
                                      ? "bg-yellow-500"
                                      : "bg-gray-500"
                              }`}
                      ></div>
                      {invoice.status}
                  </div>

              </div>

              
          ))}

      </div>
      
      <div className='hidden sm:flex flex-wrap  w-full justify-between gap-4 p-4 overflow-y-auto max-h-full sm:overflow-hidden  sm:max-h-full  '> 
          {filteredInvoices.map((invoice) => (
              <div onClick={() => navigate(`/invoice/${invoice.id}`)} key={invoice.id} className='flex dark:bg-slate-800  flex-wrap gap-4 justify-between items-center cursor-pointer w-full p-4  bg-slate-200 rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300 hover:border-2  dark:hover:bg-slate-800'>
                      <h1 className='text-white font-bold'>{invoice.id}</h1>
                      <p className='text-slate-400 text-sm'>{invoice.name}</p>
                            <h1 className='text-white font-bold'>{invoice.currency} {(invoice.quantity1 * invoice.price1 + invoice.quantity2 * invoice.price2).toFixed(2)}</h1>
                          <p className='text-slate-400 text-sm'>{invoice.date}</p>
                      <p className={`font-semibold flex justify-center items-center gap-2 ${invoice.status === "Paid" ? "text-green-500" : invoice.status === "Pending" ? "text-yellow-500" : "text-gray-500"}`}> <span className={`h-2 w-2 rounded-full ${invoice.status === "Paid" ? "bg-green-500" : invoice.status === "Pending" ? "bg-yellow-500" : "bg-gray-500"}  `}  ></span>
                        {invoice.status}</p>
                  <button className='cursor-pointer text-white'>&#9655;</button>
              </div >
          ))}

      </div>

      </>
  )
}

export default InvoiceCard
