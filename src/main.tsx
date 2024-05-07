import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter ([
  {path : '/', element : <App />},
  /*tinha alguma coisa sobre configurar a porta 404, ver depois*/
  {path : '/teste', element : <div>Hello World</div>}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
