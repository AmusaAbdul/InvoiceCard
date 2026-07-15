import { useNavigate } from 'react-router-dom';

const Invoice = ({ noOfInvoice, filter, setFilter }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex flex-col gap-2 sm:justify-between sm:flex-row  p-3">
                <div className="text-center shadow-md p-2">
                    <h1 className="text-xl font-bold">Invoice</h1>
                    <p className="text-sm">{noOfInvoice === 0 || noOfInvoice === 1 ? `There are total of ${noOfInvoice} invoice` : `There are total of ${noOfInvoice} invoices`}</p>
                </div>
                <div className="flex justify-between mt-3 items-center gap-5">
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} id="filter" className="border-2 h-10 border-blue-800 text-sm outline-none hover:border-blue-700" name="filter">
                        <option value="All">Filter by Status</option>
                        <option value="Paid">Paid</option>
                        <option value="Pending">Pending</option>
                        <option value="Draft">Draft</option>
                    </select>
                    <button onClick={() => navigate("/invoice/new")} className="bg-blue-800 text-white  h-10 p-2 text-sm rounded-full hover:bg-blue-700">New Invoice</button>
                </div>
            </div>
        </div>
    )
}

export default Invoice
