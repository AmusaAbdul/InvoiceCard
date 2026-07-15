
const BillFrom = ({ newInvoice, handleNewInvoice }) => {
    return (
        <div className="flex flex-col gap-5 p-4">
            <h2>Bill From</h2>
            <div>
                <label htmlFor="">Street Address:</label>
                <input name="streetAddress" value={newInvoice.streetAddress} onChange={handleNewInvoice} type="text" className="BillFrom w-full" />
            </div>
            <div className="flex flex-wrap justify-between gap-3 items-center">
                <span className=" itemSpan">
                    <label htmlFor="">City</label>
                    <input name="city" value={newInvoice.city} onChange={handleNewInvoice} type="text" className="BillFrom w-full" />
                </span>
                <span className=" itemSpan">
                    <label htmlFor="">Post code</label>
                    <input name="postCode" value={newInvoice.postCode} onChange={handleNewInvoice} type="text" className="BillFrom w-full" />
                </span>
                <span className=" itemSpan">
                    <label htmlFor="">Country</label>
                    <input name="country" value={newInvoice.country} onChange={handleNewInvoice} type="text" className="BillFrom w-full" />
                </span>
            </div>
        </div>
    )
}

export default BillFrom
