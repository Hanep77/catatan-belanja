import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Groceries from './components/Groceries'
import Footer from './components/Footer'

export default function App() {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [showAddItem, setShowAddItem] = useState(false)
  const [sort, setSort] = useState("")

  function handleAddItem(event) {
    event.preventDefault()
    if (name == "") return

    const newItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      name: name,
      quantity: quantity,
      isCompleted: false
    }

    setItems([...items, newItem])
    setName("")
    setQuantity(1)
    setShowAddItem(false)
  }

  function handleTypeName(event) {
    setName(event.target.value)
  }

  function handleSetQuantity(event) {
    setQuantity(Number(event.target.value))
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id))
  }

  function handleItemComplete(id) {
    setItems(items.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }

      return item
    }))
  }

  function handleShowAddItem() {
    setShowAddItem(!showAddItem)
  }

  function handleSort(e) {
    setSort(e.target.value)
  }

  function handleClearItems() {
    setItems([])
  }

  return (
    <>
      <Header />
      <Form onAddItem={handleAddItem} name={name} onTypeName={handleTypeName} quantity={quantity} onSetQuantity={handleSetQuantity} onShowAddItem={handleShowAddItem} showAddItem={showAddItem} />
      <Groceries items={items} onDeleteItem={handleDeleteItem} onItemComplete={handleItemComplete} sort={sort} />
      <Footer items={items} sort={sort} onSort={handleSort} onClearItems={handleClearItems} />
      <button className='bg-teal-600 active:bg-teal-700 w-14 h-14 rounded-full text-3xl text-slate-100 fixed bottom-12 right-2 md:hidden border-2 border-slate-200' onClick={handleShowAddItem}>+</button>
    </>
  )
}
