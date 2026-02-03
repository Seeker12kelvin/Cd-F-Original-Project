import { RouterProvider } from 'react-router-dom';
import router from "./components/routes";
import User from "./components/User";
import { APIProvider } from '@vis.gl/react-google-maps';
import useAuth from "./hooks/useAuth";
import useMessages from "./hooks/useMessages";
import useProperties from "./hooks/useProperties";
import useDataProvider from './context/UserProvider';

function App() {

  const { authState, setAuthState } = useAuth();
  const { userData, setUserData, updatedProfilePic, setUpdatedProfilePic } = useDataProvider()
  const { messageState, setMessageState, handleNewMessage } = useMessages();
  const { filteredProperties, handleSearch, moreFilters, setMoreFilters } = useProperties();

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
        <User.Provider value={{
          filteredProperties,
          handleSearch,
          moreFilters,
          setMoreFilters,
          handleNewMessage,
          authState,
          setAuthState,
          messageState,
          setMessageState,
          userData,
          setUserData,
          updatedProfilePic,
          setUpdatedProfilePic
        }}>
          <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
            <RouterProvider router={router} />
          </APIProvider>
        </User.Provider>
    </>
  )
}


export default App
