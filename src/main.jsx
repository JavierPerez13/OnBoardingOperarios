import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Principal from './pags/Principal'
createRoot(document.getElementById('root')).render(
  <>
    <Principal />
  </>,
)
