import { useState } from "react";
import User from "../components/User";

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    profilePic: '',
    dateOfBirth: '',
    phoneNumber: '',
    age: '',
    favorites: []
  });

  const [updatedProfilePic, setUpdatedProfilePic] = useState('');

  return (
    <User.Provider value={{
      userData,
      setUserData,
      updatedProfilePic,
      setUpdatedProfilePic
    }}>
      {children}
    </User.Provider>
  );
};

export default UserProvider;
