import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Force dark mode on load
document.body.classList.add('dark-violet');
document.body.setAttribute('data-theme', 'dark-violet');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
