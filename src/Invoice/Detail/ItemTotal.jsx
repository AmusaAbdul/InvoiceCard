const ItemTotal = ({ findInvoice }) => {
    return (
        <>
            <div className="bg-blue-800 text-white  p-3 flex justify-center hideItem">
                <table className="w-full sm:w-[90%] border-separate border-spacing-y-2 p-3">
                    <thead>
                        <tr className="text-left">
                            <th>Item Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody >
                        {findInvoice?.items?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.item}</td>
                                <td>{item.qty}</td>
                                <td>£{item.price}</td>
                                <td>£{(item.qty * item.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-800 largeHide text-white space-y-4 p-5">
                {findInvoice?.items?.map((item, index) => (
                    <div className="" key={index}>
                        <h1 className="font-semibold">{item.item}</h1>
                        <div className="flex justify-between text-sm text-gray-400 mt-2">
                            <span>{item.qty} * £{item.price}</span>
                            <span className="font-semibold text-white">£{(item.qty * item.price).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemTotal