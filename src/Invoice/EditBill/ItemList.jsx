const ItemList = ({ deleteItem, editInvoice, setEditInvoice, addItem }) => {
    const handleItemEdit = (index, field, value) => {
        const updatedItems = editInvoice.items.map((item, i) =>
            i === index ? { ...item, [field]: value } : item)

        setEditInvoice({ ...editInvoice, items: updatedItems })
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
    });
    return (
        <div className="flex flex-col gap-3 bg-blue-800 p-4 text-white">
            <div className="flex flex-col gap-3">
                {editInvoice?.items?.map((item, index) => (
                    <div className="flex flex-wrap justify-between w-full p-2 bg-white  text-blue-800 gap-3 items-center" key={index}>
                        <span className="flex flex-col gap-1 itemSpan ">
                            <label htmlFor="">Item Name</label>
                            <input name="item" value={item.item || ""} onChange={(e) => handleItemEdit(index, "item", e.target.value)} type="text" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan ">
                            <label htmlFor="">Qty</label>
                            <input name="qty" value={item.qty || ""} onChange={(e) => handleItemEdit(index, "qty", e.target.value)} type="number" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan">
                            <label htmlFor="">Price</label>
                            <input name="price" value={item.price || ""} onChange={(e) => handleItemEdit(index, "price", e.target.value)} type="number" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan">
                            <label htmlFor="">Total</label>
                            <input name="qty * price" type="number" className="BillFrom w-full" value={(item.qty * item.price).toFixed(2) || ""} readOnly />
                        </span>
                        <span className="itemSpan">
                            <button onClick={() => deleteItem(item.id)} key={item.id} className="bg-red-500 hover:bg-red-800 w-full rounded-full sm:rounded-none text-sm text-white p-1">Del</button>
                        </span>
                    </div>
                ))}
            </div>
            <button onClick={addItem} type="button" className="text-blue-800 bg-white p-1 text-sm rounded-full hover:bg-blue-700 hover:text-white">Add New Item</button>
        </div>
    )
}

export default ItemList
