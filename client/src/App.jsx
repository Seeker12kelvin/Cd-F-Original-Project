import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/landingPage";
import Home from "./Pages/Home/home"
import Header from "./components/Header/header";
import SignUp from "./Pages/SignUp/signUp";
import Login from "./Pages/Login/login";
import Rent from "./Pages/Rent/rent";
import RentDetails from "./Pages/Rent/Rent-Details/rentDetails";
import Dashboard from "./Pages/Dashboard/dashboard";
import Applications from "./Pages/Applications/applications";
import Favorite from "./Pages/Favorited/favorited";
import User from "./components/User";
import UpdateUserInfo from "./components/UpdateUserInfo";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, update, ref, push, get, onValue} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import SignUpLoginLayout from "./components/signUpLoginLayout";
import TenancyApplicationsPage from "./Pages/Tenancy-Applications/tenancyApplicationsPage";
import PersonalApplications from "./Pages/Personal-Application/personalApplications";
import EmploymentApplications from "./Pages/Employment-Application/employmentApplications";
import {APIProvider} from '@vis.gl/react-google-maps';
import RentSearch from "./Pages/Rent/Rent-Search/rentSearch";
import properDetails from "./data/data";

function App() {

  const firebaseConfig = {
    databaseURL: "https://estatery-ebaec-default-rtdb.firebaseio.com"
  }

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
  const reference = ref(database, 'UserData')

  const [userData, setUserData] = useState({
    name: 'Kelvin Tamaramiepayefa Donye',
    password: '',
    email: '',
    profilePic: '',
    dateOfBirth: '',
    phoneNumber: '',
    age: ''
  })

  const [filteredProperties, setFilteredProperties] = useState(properDetails);
    
  const handleSearch = (searchTerm) => {
    const filtered = properDetails.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filtered);
  }

  const [userLogged, setUserLogged] = useState(false)
  const [userValidity, setUserValidity] = useState({email: '', password: ''})
  const [notFound, setNotFound] = useState(false)
  const [loadingState, setLoadingState] = useState(false)
  const [updatedProfilePic, setUpdatedProfilePic] = useState('')
  const [moreFilters, setMoreFilters] = useState(false)

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
        },
        {
          path: 'rent/search',
          element: <RentSearch />
        }
      ]
    },
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: 'applications',
          element: <Applications />
        },
        {
          path: 'favorite',
          element: <Favorite />
        }
      ]
    },
    {
      path: '/signUp&login',
      element: <SignUpLoginLayout />,
      children: [
        {
          path: 'sign-up',
          element:<SignUp />
        },
        {
          path: 'login',
          element:<Login />
        }
      ]
    },
    {
      path: '/tenancy-applications/:id',
      element: <TenancyApplicationsPage />,
      children: [
        {
          index: true,
          element: <PersonalApplications />
        },
        {
          path: 'employment-status',
          element: <EmploymentApplications />
        }
      ]
    }
  ])

  return (
    <>
      <User.Provider value={{
        initializeApp,
        getDatabase,
        ref,
        update,
        push,
        get,
        onValue,
        firebaseConfig,
        reference,
        userData,
        setUserData,
        userValidity,
        setUserValidity,
        notFound,
        setNotFound,
        loadingState,
        setLoadingState,
        database,
        updatedProfilePic,
        setUpdatedProfilePic,
        userLogged,
        setUserLogged,
        filteredProperties,
        handleSearch,
        moreFilters,
        setMoreFilters
      }}>
        <UpdateUserInfo />
        <APIProvider apiKey={'AIzaSyAP1KmNayA4TiRmtShgFy13KHjYdxq3YBc'} onLoad={() => console.log('Maps API has loaded.')}>
          <RouterProvider router={router} />
        </APIProvider>
      </User.Provider>
    </>
  )
}

export default App
