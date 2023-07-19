import { useState } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar/>
      <LandingPage/>
   </div>
  )
}

export default App
