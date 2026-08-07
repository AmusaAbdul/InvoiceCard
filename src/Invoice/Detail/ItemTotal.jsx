const ItemTotal = ({ findInvoice }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
    });

    const total = findInvoice?.items?.reduce(
        (sum, i) => sum + (i.qty * i.price), 0
    );


    return (
        <>
            <div className="hideItem">
            <div className="bg-blue-800 text-white p-3 flex justify-center">
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
                                <td>{formatter.format(item.price)}</td>
                                <td>{formatter.format((item.qty * item.price).toFixed(2))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-black p-10 amountDiv text-white flex justify-between ">
                    <h1 className="">Amount Due</h1>
                    <h1 className="text-2xl">{formatter.format(total)}</h1>
            </div>
            </div>


            <div className="largeHide">
            <div className="bg-blue-800 text-white space-y-4 p-5">
                {findInvoice?.items?.map((item, index) => (
                    <div className="" key={index}>
                        <h1 className="font-semibold">{item.item}</h1>
                        <div className="flex justify-between text-sm text-gray-400 mt-2">
                            <span>{item.qty} * £{item.price}</span>
                            <span className="font-semibold text-white">{formatter.format((item.qty * item.price).toFixed(2))}</span>
                        </div>
                    </div>
                ))}
            </div>
                <div className="bg-black p-3 amountDiv">
                    <div className="text-white flex justify-between mt-10">
                        <h1 className="">Amount Due</h1>
                        <h1 className="text-xl">{formatter.format(total)}</h1>
                    </div>
                </div>  
            </div>      
        </>
    )
}

export default ItemTotal