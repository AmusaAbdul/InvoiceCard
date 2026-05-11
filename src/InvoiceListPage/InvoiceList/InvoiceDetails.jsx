import { useParams, useNavigate} from "react-router-dom";
// import StatusInvoice from "./subInvoicePage/StatusInvoice";
import InvoiceFeatures from "./subInvoicePage/InvoiceFeatures";
import DetailsList from "./subInvoicePage/DetailsList";



const InvoiceDetail = ({newInvoice, invoices, markAsPaid, deleteInvoice }) => {

    const { id } = useParams();

    const invoice = invoices.find(inv => inv.id?.toString().trim() === id?.toString().trim());

    if (!invoice) {
        return <h2>Invoice not found</h2>;
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this invoice?");
        if (confirmDelete) {
            deleteInvoice(invoice.id);
            navigate("/");
        }
    };


   
    const navigate = useNavigate();
    return (
        <div className="p-4 sm:p-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate("/")}
                    className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
                >
                    ← Go Back
                </button>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow">

                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">Status</span>

                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold
                        ${invoice.status === "Paid" ? "bg-green-100 text-green-600" :
                            invoice.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                                "bg-gray-100 text-gray-500"}`}>

                        <span className={`w-2 h-2 rounded-full
                         ${invoice.status === "Paid" ? "bg-green-500" :
                                invoice.status === "Pending" ? "bg-yellow-500" :
                                    "bg-gray-500"}`} />

                        {invoice.status}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <button onClick={() => navigate(`/invoice/${invoice.id}/edit`)} className="bg-gray-400 px-4 py-2 cursor-pointer rounded-full text-sm">Edit</button>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                        onClick={handleDelete}

                    >
                        Delete
                    </button>
                    <button
                        onClick={() => markAsPaid(invoice.id)}
                        disabled={invoice.status !== "Pending"}
                        className={`px-3 py-1 rounded-full 
                        ${invoice.status === "Pending"
                                ? "bg-green-500 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >       
                        Mark as Paid
                    </button>
                </div>

            </div>
            <InvoiceFeatures invoices={invoices}/>
            <DetailsList invoices={invoices}/>
            
            <div className="bg-black rounded-b-xl mt-0 p-4 flex justify-between items-center">
                <span className="text-gray-400 text-sm">Amount Due</span>
                <h2 className="text-xl text-white font-bold">
                    {invoice.currency} {(invoice.quantity1 * invoice.price1 + invoice.quantity2 * invoice.price2).toFixed(2)}
                </h2>
            </div>
            
        </div>
    );
};

export default InvoiceDetail;
