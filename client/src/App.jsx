import React, { useRef, useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/landingPage";
import Home from "./Pages/Home/home";
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
import SignUpLoginLayout from "./components/signUpLoginLayout";
import TenancyApplicationsPage from "./Pages/Tenancy-Applications/tenancyApplicationsPage";
import PersonalApplications from "./Pages/Personal-Application/personalApplications";
import EmploymentApplications from "./Pages/Employment-Application/employmentApplications";
import {APIProvider} from '@vis.gl/react-google-maps';
import RentSearch from "./Pages/Rent/Rent-Search/rentSearch";
import properDetails from "./data/data";
import Message from "./Pages/Message/message";
import UserMessages from "./Pages/Message/userMessages";
import Settings from "./Pages/Settings/settings";
import Profile from "./Pages/Settings/profile";
import Account from "./Pages/Settings/account";
import Notification from "./Pages/Settings/notification";
import UserChats from "./Pages/Message/userChats";
import ChatBox from "./Pages/Message/chatBox";
import firebaseLogic from "./components/firebaseLogic";

function App() {

  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    profilePic: '',
    dateOfBirth: '',
    phoneNumber: '',
    age: '',
    favorites: []
  })

  const { get, reference, } = firebaseLogic();

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

  const [newMessage, setNewMessage] = useState(false)
  const [chatUser, setChatUser] = useState(null)

  const [there, setThere] = useState(false)
  const [filled, setFilled] = useState(false)
  const [many, setMany] = useState('')
  const [chatId, setChatId] = useState('')
  const [listOfUserMessages, setListOfUserMessages] = useState([])

  const identity = useRef(0);

  const handleNewMessage = async (e) => {
    e.preventDefault()
    // Handle form submission logic here

    try {
      const snapshot = await get(reference);

      if (!snapshot.exists()) {
        setThere(true);
        return;
      }

      const data = snapshot.val();
      const usersArray = Object.values(data);

      const found = usersArray.find(
        (user) => user.email === e.target.elements.email.value
      );

      if (!found) {
        setThere(true);
        return;
      }

      setChatUser(found);

      if (listOfUserMessages.length === 0) {
        setListOfUserMessages(prev => [...prev, { id: ++identity.current, ...found }]);
      } else {
        setListOfUserMessages(prev => [...prev, { id: ++identity.current, ...found }]);
        setMany("entered");
      }

    } catch (error) {
      console.error("Error finding user:", error);
    }

    setNewMessage(false)
  }

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
          index: true,
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
    },
    {
      path: '/message',
      element: <Message />,
      children: [
        {
          index: true,
          element: <UserMessages />
        },
        {
          path: 'chat',
          element: <UserChats />,
          children: [
            {
              path: ':id',
              element: <ChatBox />
            }
          ]
        }
      ]
    },
    {
      path: '/settings',
      element: <Settings />,
      children: [
        {
          index: true,
          element: <Profile />
        },
        {
          path: 'my-account',
          element: <Account />
        },
        {
          path: 'notifications',
          element: <Notification />
        }
      ]
    }
  ])

  return (
    <>
      <User.Provider value={{
        userData,
        setUserData,
        userValidity,
        setUserValidity,
        notFound,
        setNotFound,
        loadingState,
        setLoadingState,
        updatedProfilePic,
        setUpdatedProfilePic,
        userLogged,
        setUserLogged,
        filteredProperties,
        handleSearch,
        moreFilters,
        setMoreFilters,
        newMessage,
        setNewMessage,
        chatUser,
        setChatUser,
        there,
        setThere,
        filled,
        setFilled,
        handleNewMessage,
        many,
        setMany,
        chatId,
        setChatId,
        listOfUserMessages,
        setListOfUserMessages
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
