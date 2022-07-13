import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './counter'
import {Provider} from 'react-redux'
import { store } from './Redux/store'

function App() {
 

  return (
    <Provider store={store}>
      
      <Counter/>
  
    </Provider>
    
  )
}

export default App
