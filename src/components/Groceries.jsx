export default function Groceries({ items, onDeleteItem, onItemComplete, sort }) {
    let sortedItems = items

    sortedItems = {}
    if (sort == "nameaz") {
        sortedItems = items.sort((a, b) => a.name < b.name ? -1 : 1)
    } else if (sort == "nameza") {
        sortedItems = items.sort((a, b) => a.name > b.name ? -1 : 1)
    } else if (sort == "done") {
        sortedItems = items.sort((a, b) => a.isCompleted > b.isCompleted ? -1 : 1)
    } else if (sort == "notDone") {
        sortedItems = items.sort((a, b) => a.isCompleted < b.isCompleted ? -1 : 1)
    } else if (sort == "default") {
        sortedItems = items.sort((a, b) => a.id < b.id ? -1 : 1)
    } else if (sort == "newest") {
        sortedItems = items.sort((a, b) => a.id > b.id ? -1 : 1)
    } else {
        sortedItems = items
    }

    return (
        <div className="px-4 mt-4">
            <ul className="flex flex-col items-center gap-2">
                {sortedItems.map(item => (
                    <li key={item.id} className={`${item.isCompleted ? 'bg-red-600' : 'bg-teal-600'} bg-opacity-15 border border-teal-700 py-2 px-4 text-lg text-teal-900 rounded inline-block`}>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="h-4 w-4" onChange={() => onItemComplete(item.id)} />
                            <p className={item.isCompleted && "line-through"}>{item.quantity} {item.name}</p>
                            <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 w-6 h-6 text-sm rounded-full text-slate-100" onClick={() => onDeleteItem(item.id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}