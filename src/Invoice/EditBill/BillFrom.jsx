const BillFrom = ({ editInvoice, handleEditInvoice }) => {
    return (
        <div className="flex flex-col gap-5 p-4">
            <h2>Bill From</h2>
            <div>
                <label htmlFor="">Street Address:</label>
                <input name="streetAddress" value={editInvoice?.streetAddress} onChange={handleEditInvoice} type="text" className="BillFrom w-full" />
            </div>
            <div className="flex flex-wrap justify-between gap-3 items-center">
                <span className=" itemSpan">
                    <label htmlFor="">City</label>
                    <input name="city" value={editInvoice?.city} onChange={handleEditInvoice} type="text" className="BillFrom w-full" />
                </span>
                <span className=" itemSpan">
                    <label htmlFor="">Post code</label>
                    <input name="postCode" value={editInvoice?.postCode} onChange={handleEditInvoice} type="text" className="BillFrom w-full" />
                </span>
                <span className=" itemSpan">
                    <label htmlFor="">Country</label>
                    <input name="country" value={editInvoice?.country} onChange={handleEditInvoice} type="text" className="BillFrom w-full" />
                </span>
            </div>
        </div>
    )
}

export default BillFrom
