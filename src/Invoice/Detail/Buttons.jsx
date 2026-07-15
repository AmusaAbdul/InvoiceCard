import { useNavigate } from "react-router-dom"

const Buttons = ({ findInvoice, deleteInvoice, markAsPaid }) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this invoice?");
        if (confirmDelete) {
            deleteInvoice(findInvoice.id);
            navigate("/");
        }

    };

    const handlePaid = () => {
        const confirmPaid = window.confirm("Are you sure")
        if (confirmPaid) {
            markAsPaid(findInvoice.id);
        }
    }
    return (
        <div className="bg-blue-800 text-white flex justify-center">
            <div className="p-3 w-full sm:w-[90%] flex justify-between detailCol">
                <span className="flex gap-2 items-center">
                    Status
                    <p className={` p-2 flex gap-1 justify-center items-center shadow-md font-bold text-sm text-center ${findInvoice.status === "Pending" ? "shadow-yellow-500 text-yellow-500" :
                        findInvoice.status === "Paid" ? "shadow-green-500 text-green-500" : "shadow-gray-500 text-gray-500"}`}>
                        <span className={`h-2 w-2 rounded-full ${findInvoice.status === "Pending" ? "bg-yellow-500 text-yellow-500" :
                            findInvoice.status === "Paid" ? "bg-green-500 text-green-500" : "bg-gray-500 text-gray-"}`}>
                        </span>{findInvoice.status}
                    </p>
                </span>
                <span className="flex justify-between gap-2 text-sm detailRight">
                    <button onClick={() => navigate(`/invoice/${findInvoice.id}/edit`)} className="shadow-md p-2 rounded-full hover:shadow-2xl">Edit</button>
                    <button onClick={handleDelete} key={findInvoice.id} className="bg-red-500 p-2 rounded-full hover:bg-red-800">Delete</button>
                    <button onClick={handlePaid}
                        className={`p-2 rounded-full ${findInvoice.status === "Pending" ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 cursor-not-allowed "}`}>
                        Mark as Paid
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Buttons
