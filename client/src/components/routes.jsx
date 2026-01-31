import { createBrowserRouter } from 'react-router-dom'
import LandingPage from "../Pages/LandingPage/landingPage";
import Home from "../Pages/Home/home";
import Header from "./Header/header";
import SignUp from "../Pages/SignUp/signUp";
import Login from "../Pages/Login/login";
import Rent from "../Pages/Rent/rent";
import RentDetails from "../Pages/Rent/Rent-Details/rentDetails";
import Dashboard from "../Pages/Dashboard/dashboard";
import Applications from "../Pages/Applications/applications";
import Favorite from "../Pages/Favorited/favorited";
import SignUpLoginLayout from "./signUpLoginLayout";
import TenancyApplicationsPage from "../Pages/Tenancy-Applications/tenancyApplicationsPage";
import PersonalApplications from "../Pages/Personal-Application/personalApplications";
import EmploymentApplications from "../Pages/Employment-Application/employmentApplications";
import RentSearch from "../Pages/Rent/Rent-Search/rentSearch";
import Message from "../Pages/Message/message";
import UserMessages from "../Pages/Message/userMessages";
import Settings from "../Pages/Settings/settings";
import Profile from "../Pages/Settings/profile";
import Account from "../Pages/Settings/account";
import Notification from "../Pages/Settings/notification";
import UserChats from "../Pages/Message/userChats";
import ChatBox from "../Pages/Message/chatBox";

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

export default router