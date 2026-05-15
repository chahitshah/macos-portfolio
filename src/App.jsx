import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Wallpaper from './components/Wallpaper'
const App = () => {
  return (
    <main>
      <Wallpaper width="100%" height="100%"/>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App
