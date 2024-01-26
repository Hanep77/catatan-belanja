export default function Footer({ items, sort, onSort, onClearItems }) {
    const buyedItems = items.filter(item => item.isCompleted && item)

    return (
        <div className="md:bg-teal-600 text-slate-100 fixed max-w-[768px] bottom-0 left-0 right-0 m-auto rounded-t-xl">
            <div className="p-3 bg-teal-600 inline-block md:flex md:justify-center md:gap-2 rounded-tr-xl md:rounded-t-xl">
                <select value={sort} onChange={onSort} className="text-slate-900 h-8 px-2 rounded mr-2 md:m-0 outline-teal-600">
                    <option>-- Sortir berdasarkan --</option>
                    <option value="nameaz">Nama a-z</option>
                    <option value="nameza">Nama z-a</option>
                    <option value="done">Dibeli</option>
                    <option value="notDone">Belum dibeli</option>
                    <option value="default">terlama</option>
                    <option value="newest">terbaru</option>
                </select>
                <button className="h-8 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded" onClick={onClearItems}>Bersihkan</button>
            </div>
            <div className="text-center bg-teal-700 p-3 rounded-tr-xl md:rounded-t-xl">
                <p className={`${items.length > 0 && "hidden"} text-sm`}>Belum ada item yang dimasukan</p>
                <p className={`${items.length == 0 && "hidden"} text-sm`}>total item {items.length} dibeli {buyedItems.length}. persentase ({buyedItems.length / items.length * 100}%)</p>
            </div>
        </div>
    )
}