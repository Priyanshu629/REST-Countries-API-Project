import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchFilterProvider } from './context/search-filter.jsx'
import { ThemeProvider } from './context/theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchFilterProvider>
      <ThemeProvider>
    <App />
    </ThemeProvider>
    </SearchFilterProvider>
  </StrictMode>,
)
