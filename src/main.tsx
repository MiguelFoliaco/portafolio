import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Supports weights 100-900
import '@fontsource-variable/inter/wght.css';
import { FormspreeProvider } from '@formspree/react';


createRoot(document.getElementById('root')!).render(
  <FormspreeProvider >
    <StrictMode>
      <App />
    </StrictMode>
  </FormspreeProvider>,
)
