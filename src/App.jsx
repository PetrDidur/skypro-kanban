
import './App.css'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import { PopBrowse } from './components/PopBrowse/PopBrowse'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {

  return (
    <>
  {/* pop-up start*/}
  <PopExit />
  <PopNewCard />
  <PopBrowse />
  {/* pop-up end*/}
  <Header />
  <Main />

    </>
  )
}

export default App
