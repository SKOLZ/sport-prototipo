import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './main.scss'
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
