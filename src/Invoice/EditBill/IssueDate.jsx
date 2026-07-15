const IssueDate = ({ editInvoice, handleEditInvoice }) => {
    return (
        <div className="flex flex-wrap justify-between gap-3 items-center p-4">
            <span className="w-full itemSpan">
                <label htmlFor="">Issue Date</label>
                <input name="issueDate" value={editInvoice?.issueDate} onChange={handleEditInvoice} type="date" className="BillFrom w-full" />
            </span>
            <span className="w-full itemSpan">
                <label htmlFor="">Payment Terms</label>
                <select name="paymentTerms" value={editInvoice?.paymentTerms} onChange={handleEditInvoice} className="BillFrom w-full">
                    <option value="90">Net 90days</option>
                    <option value="60">Net 60days</option>
                    <option value="30">Net 30days</option>
                    <option value="15">Net 15days</option>
                    <option value="7">Net 7days</option>
                    <option value="1">Net 1 day</option>
                </select>
            </span>
            <span className="w-full itemSpan">
                <label htmlFor="">Project Description</label>
                <input name="projDecrpt" value={editInvoice?.projDecrpt} onChange={handleEditInvoice} type="text" className="BillFrom w-full" />
            </span>
        </div>
    )
}

export default IssueDate
