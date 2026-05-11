import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Router
import './index.css'
import App from './App.jsx'
import ListStokis from './pages/ListStokis.jsx' // Import halaman List Stokis yang baru dibuat

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<App />} />
        
        {/* Halaman Khusus Jaringan Stokis */}
        <Route path="/list-stokis" element={<ListStokis />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)