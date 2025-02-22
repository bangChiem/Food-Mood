import { useState } from 'react'
import './App.css'
import CardPage from './pages/CardPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardPage></CardPage>
    </>
  )
}

export default App