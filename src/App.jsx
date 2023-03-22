import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConnectMetamask from './components/ConnectMetamask'

function App() {
  return (
    <div className="App">
      <ConnectMetamask />
    </div>
  )
}

export default App
