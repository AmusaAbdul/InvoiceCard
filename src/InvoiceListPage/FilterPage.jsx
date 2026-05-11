import React from 'react'
import { useNavigate } from "react-router-dom";

const FilterPage = ({ filter, setFilter, noOfInvoices }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-4 p-4 sm:flex-row sm:justify-between sm:items-center'>

           <div>
                <h1 className='text-xl font-bold sm:text-2xl'>
                    Invoices
                </h1>
                <p>There are {noOfInvoices} total invoices</p>
           </div>

            <div className='flex items-center justify-between gap-3 sm:justify-end'>

                <select
                    className='outline-none border border-slate-400 dark:border-slate-600 p-2 rounded-md text-sm sm:text-base'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option className='text-black' value="All">Filter by Status</option>
                    <option className='text-black' value="Paid">Paid</option>
                    <option className='text-black' value="Pending">Pending</option>
                    <option className='text-black' value="Draft">Draft</option>
                </select>

                <div onClick={() => navigate('/invoice/new')} className='flex items-center gap-2 bg-slate-500 hover:bg-slate-700 text-white px-3 py-2 rounded-full cursor-pointer transition'>

                    <div className='bg-white text-black dark:bg-black dark:text-white rounded-full w-6 h-6 flex items-center justify-center'>
                        +
                    </div>

                    <span className='hidden sm:block font-semibold text-sm'>
                        New Invoice
                    </span>
                </div>

            </div>
        </div>
    )
}

export default FilterPage