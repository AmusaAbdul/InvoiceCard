const EachId = ({ findInvoice }) => {
    let parts = findInvoice?.issueDate ? findInvoice.issueDate.split("-") : []
    let year = parseInt(parts[0], 10)
    let month = parseInt(parts[1], 10) - 1
    let day = parseInt(parts[2], 10)
    let initialDate = new Date(year, month, day)
    initialDate.setDate(parseInt(initialDate.getDate(), 10) + parseInt(findInvoice.paymentTerms, 10))
    let finalYear = initialDate.getFullYear()
    let finalMonth = initialDate.toLocaleString("en-US", { month: "short" })
    let finalDay = String(initialDate.getDate()).padStart(2, "0")
    let dueDate = `${finalYear}-${finalMonth}-${finalDay}`
    const now = new Date()
    const due = new Date(dueDate)
    const diff = due - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return (
        <div className="bg-blue-800 text-white p-3 flex justify-center">
            <div className="w-full sm:w-[90%] p-3 space-y-5">
                <div className="flex flex-wrap justify-between gap-5 ">
                    <span className="flex flex-col gap-1 shadow-lg p-2">
                        <h1 className="font-bold">#{findInvoice.id}</h1>
                        <p className="text-sm">{findInvoice.projDecrpt}</p>
                    </span>
                    <span className="text-sm sm:text-end shadow-lg p-2">
                        <p>{findInvoice.streetAdd}</p>
                        <p>{findInvoice.city}</p>
                        <p>{findInvoice.postCode}</p>
                        <p>{findInvoice.country}</p>
                    </span>
                    <span className=" itemSpan shadow-lg p-2">
                        <p className="text-sm">Invoice Date</p>
                        <h1 className="font-bold">{findInvoice.issueDate}</h1>
                    </span>
                    <span className="itemSpan shadow-lg p-2">
                        <p className="text-sm">Bill To</p>
                        <h1 className="font-bold">{findInvoice.clientName}</h1>
                        <p className="text-sm">{findInvoice.clientAdd2}</p>
                        <p className="text-sm">{findInvoice.city2}</p>
                        <p className="text-sm">{findInvoice.postCode2}</p>
                        <p className="text-sm">{findInvoice.country2}</p>
                    </span>
                    <span className=" itemSpan shadow-lg p-2">
                        <p className="text-sm">Sent to</p>
                        <h1 className="font-bold">{findInvoice.clientEmail}</h1>
                    </span>
                    <span>
                        <p className="text-sm shadow-lg p-2">Payment Due</p>
                        <h1 className="font-bold">{dueDate}({days < 1 ? "Due in a day" : days > 0 ? `Due in ${days}days` : ""})</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EachId
