import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/landingPage";
import Home from "./Pages/Home/home"
import Header from "./components/Header/header";
import SignUp from "./Pages/SignUp/signUp";
import Login from "./Pages/Login/login";
import Rent from "./Pages/Rent/rent";
import RentDetails from "./Pages/Rent//Rent Details/rentDetails";
import User from "./components/User";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

function App() {

  const firebaseConfig = {
    databaseURL: "https://comm-2eb25-default-rtdb.firebaseio.com/"
  }

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
  const reference = ref(database, 'UserData')

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <div>URL not found bro</div>,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'rent',
          element: <Rent />
        },
        {
          path: 'rent/:id',
          element: <RentDetails />
        }
      ]
    },
    {
      path: '/home',
      element: <Home />
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
      <User.Provider value={{
        initializeApp,
        getDatabase,
        ref,
        push,
        onValue,
        firebaseConfig,
        reference
      }}>
      <RouterProvider router={router} />
      </User.Provider>
    </>
  )
}

export default App
