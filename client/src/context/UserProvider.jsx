import { useState } from "react";

const useDataProvider = () => {

  const [userData, setUserData] = useState({
    name: 'Kelvin Tamaramiepayefa Donye',
    password: '',
    email: '',
    profilePic: '',
    dateOfBirth: '',
    phoneNumber: '',
    age: '',
    favorites: []
  });

  const [updatedProfilePic, setUpdatedProfilePic] = useState('');

  return {userData, setUserData, updatedProfilePic, setUpdatedProfilePic};
};

export default useDataProvider;
