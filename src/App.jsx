// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='bg-black px-10 text-gray-100 min-h-screen object-cover'>
      <div className="py-1 justify-between flex flex-row">
      <Sidebar />
      <Home />
      </div>
    </main>
  )
}

export default App
