import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home/home"
import Header from "./components/Header/header"
import SignUp from "./Pages/SignUp/signUp"
import Login from "./Pages/Login/login"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <div>URL not found bro</div>,
      children: [
        {
          index: true,
          element: <Home />,
        }
      ]
    },
    {
      path: '/sign-up',
      element:<SignUp />
    },
    {
      path: '/login',
      element:<Login />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
