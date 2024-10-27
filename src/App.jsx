
import './App.css'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import { PopBrowse } from './components/PopBrowse/PopBrowse'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { useState, useEffect } from 'react'
import { tasks } from './data'



function App() {
  const [cards, setCards] = useState(tasks)
  const [isLoading, setIsLoading] = useState(true)

  function addCard() {
    const newTask = {
      id: tasks.length + 1,
      title: 'Добавленная задача',
      theme: 'Research',
      status: 'Без статуса',
      date: '31.10.23',
    }
    setCards([...cards, newTask])

  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeOut)
  }, [])


  return (
    <>
    
  <PopExit />
  <PopNewCard />
  <PopBrowse />
  <Header addCard={addCard}/>
  {isLoading ? (
    <p>Данные загружаются...</p>
  ): (
    <Main cards={cards}/>
  )}

    </>
  )
}

export default App
