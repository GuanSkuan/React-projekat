import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/pilule.css'
import './css/pravougaonici.css'
import './css/header-footer.css'
import './css/uvodne-slike.css'
import './css/pozadinske-boje.css'
import './css/recept.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
