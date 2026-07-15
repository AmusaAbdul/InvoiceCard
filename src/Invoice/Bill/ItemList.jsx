const ItemList = ({ items, handleItemChange, deleteItem, addItem }) => {
    return (
        <div className="flex flex-col gap-3 bg-blue-800 p-4 text-white">
            <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                    <div className="flex flex-wrap justify-between w-full p-2 bg-white  text-blue-800 gap-3 items-center" key={index}>
                        <span className="flex flex-col gap-1 itemSpan ">
                            <label htmlFor="">Item Name</label>
                            <input name="items" value={item.item} onChange={(e) => handleItemChange(index, "item", e.target.value)} type="text" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan ">
                            <label htmlFor="">Qty</label>
                            <input name="items" value={item.qty} onChange={(e) => handleItemChange(index, "qty", e.target.value)} type="number" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan">
                            <label htmlFor="">Price</label>
                            <input name="items" value={item.price} onChange={(e) => handleItemChange(index, "price", e.target.value)} type="number" className="BillFrom w-full" />
                        </span>
                        <span className="flex flex-col gap-1 itemSpan">
                            <label htmlFor="">Total</label>
                            <input name="items" type="number" className="BillFrom w-full" value={(item.qty * item.price).toFixed(2)} readOnly />
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
