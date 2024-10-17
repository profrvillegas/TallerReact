import { useState } from 'react'
import Button from './components/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import ButtonProps from './components/ButtonProps'
import Products from './components/Products'

function App() {

  return (
    <>
      <h1>Taller de React</h1>
      <Products />
    </>
  )
}

export default App
