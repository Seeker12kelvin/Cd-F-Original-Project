import { RouterProvider } from 'react-router-dom';
import router from "./components/routes";
import User from "./components/User";
import { APIProvider } from '@vis.gl/react-google-maps';
import UserProvider from "./context/UserProvider";
import useAuth from "./hooks/useAuth";
import useMessages from "./hooks/useMessages";
import useProperties from "./hooks/useProperties";

function App() {

  const { authState, setAuthState } = useAuth();
  const { messageState, setMessageState, handleNewMessage } = useMessages();
  const { filteredProperties, handleSearch, moreFilters, setMoreFilters } = useProperties();

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <UserProvider>
        <User.Provider value={{
          filteredProperties,
          handleSearch,
          moreFilters,
          setMoreFilters,
          handleNewMessage,
          authState,
          setAuthState,
          messageState,
          setMessageState
        }}>
          <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
            <RouterProvider router={router} />
          </APIProvider>
        </User.Provider>
      </UserProvider>
    </>
  )
}


export default App
