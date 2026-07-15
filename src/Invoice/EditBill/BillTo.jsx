const BillTo = ({ editInvoice, handleEditInvoice }) => {
    return (
        <div className="flex flex-col gap-5 bg-blue-800 p-4 text-white">
            <h2>Bill To</h2>
            <div className="flex flex-wrap justify-between gap-2  items-center">
                <div className=" itemSpan">
                    <label htmlFor="">Client's Name</label>
                    <input name="clientName" value={editInvoice?.clientName} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
                <div className=" itemSpan">
                    <label htmlFor="">Client's Email</label>
                    <input name="clientEmail" value={editInvoice?.clientEmail} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
                <div className=" itemSpan">
                    <label htmlFor="">Street Address</label>
                    <input name="streetAddress2" value={editInvoice?.streetAddress2} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
                <div className=" itemSpan">
                    <label htmlFor="">City</label>
                    <input name="city2" value={editInvoice?.city2} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
                <div className=" itemSpan">
                    <label htmlFor="">Post code</label>
                    <input name="postCode2" value={editInvoice?.postCode2} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
                <div className=" itemSpan">
                    <label htmlFor="">Country</label>
                    <input name="country2" value={editInvoice?.country2} onChange={handleEditInvoice} type="text" className="BillTo w-full text-blue-800" />
                </div>
            </div>
        </div>
    )
}

export default BillTo
