import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './component/Register'
import View from './component/view'
import Update from './component/Update'
import Delete from './component/Delete'

function App() {
  

  return (
   <div style={{border:'5px solid red', padding:'20px' }}><h1 >CRUD FUNCTION</h1>
    <Register/>
    <View/>
    <Update/>
    <Delete/>
   </div>
  )
}

export default App