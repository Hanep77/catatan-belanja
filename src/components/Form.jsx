export default function Form({ onAddItem, name, onTypeName, quantity, onSetQuantity, onShowAddItem, showAddItem }) {
    return (
        <form onSubmit={onAddItem}>
            <div className="hidden md:flex justify-center items-center gap-1 py-4 border-b border-slate-300">
                <label htmlFor="quantity">Jumlah: </label>
                <select id="quantity" value={quantity} onChange={onSetQuantity} className="h-8 px-2 rounded bg-slate-100 border border-teal-600 focus:outline-teal-600">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="text" className="h-8 px-2 rounded bg-slate-100 border border-teal-600 focus:outline-teal-600" placeholder="contoh: sayur" value={name} onChange={onTypeName} />
                <button className="bg-teal-600 h-8 px-2 rounded text-slate-100 hover:bg-teal-700 active:bg-teal-800">Tambah</button>
            </div>

            <div className="flex md:hidden justify-center items-center gap-1 py-4 border-b border-slate-300">
                <button type="button" className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 px-2 py-1 rounded text-slate-100" onClick={onShowAddItem}>+ Tambah Item</button>
            </div>

            <div id='createTask' className={`${showAddItem ? "flex" : "hidden"} bg-slate-950 bg-opacity-75 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 justify-center items-center px-4 z-10`}>
                <div className='w-full bg-slate-300 border border-teal-600 p-4 rounded flex flex-col gap-4 max-w-96'>
                    <h4 className="text-2xl text-center bg-teal-600 py-2 rounded-t text-slate-100">Belanja apa?</h4>
                    <div className="flex flex-col justify-center gap-2">
                        <div className="text-end">
                            <label htmlFor="quantity">Jumlah : </label>
                            <select id="quantity" value={quantity} onChange={onSetQuantity} className="h-8 px-2 rounded bg-slate-100 border border-teal-600 focus:outline-teal-600">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <input type="text" id='task' value={name} onChange={onTypeName} placeholder='contoh: sayur' className='px-2 py-1 rounded outline-none border border-teal-700 bg-slate-100 focus:border-teal-600' />
                    </div>
                    <div className='flex justify-end gap-1 text-white'>
                        <button type="button" className='bg-red-600 hover:bg-red-700 active:bg-red-800 px-2 py-1 rounded' onClick={onShowAddItem}>cancel</button>
                        <button className='bg-teal-600 hover:bg-teal-700 active:bg-teal-800 px-2 py-1 rounded'>Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}