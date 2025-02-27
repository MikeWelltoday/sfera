import React from 'react'

import { App } from '@/app/App'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const register = await navigator.serviceWorker.register('/sw.js')
      console.log(register)
      console.log('SW register success')
    } catch (error) {
      console.log('SW register failed')
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
