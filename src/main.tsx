import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { PROJECTS } from '@/content/site'
import { prefetchImages } from '@/utils/imageCache'
import './styles/global.css'

prefetchImages([
  '/images/hero-start.png',
  ...PROJECTS.flatMap((project) => project.images.map((image) => image.src)),
])

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element #root not found')
}

createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
