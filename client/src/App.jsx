import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Home/home"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>URL not found bro</div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
