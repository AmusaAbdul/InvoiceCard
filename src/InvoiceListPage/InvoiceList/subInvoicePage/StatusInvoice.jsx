import { useParams } from "react-router-dom";
import invoices from "../../../Invoice"
import { useNavigate } from "react-router-dom";

const StatusInvoice = ({ invoices, markAsPaid, deleteInvoice }) => {

    const { id } = useParams();

    const invoice = invoices.find((inv) => inv.id === id);

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
  )
}

export default StatusInvoice
