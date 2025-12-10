import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { routers } from './routers/Routers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <Provider store={stor}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
)
