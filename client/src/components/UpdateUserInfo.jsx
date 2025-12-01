import React, { useContext, useEffect } from 'react';
import User from './User';

const UpdateUserInfo = () => {

  const {
    updatedProfilePic,
    database,
    update,
    ref,
    userData
  } = useContext(User);

  useEffect(() => {
    const userKeyId = JSON.parse(localStorage.getItem("currentUserId"));
    const updatedUserData = ref(database, `UserData/${userKeyId}`);
    update(updatedUserData, {
      age: userData.age,
      profilePic: updatedProfilePic,
      phoneNumber: userData.phoneNumber,
      dateOfBirth: userData.dateOfBirth
    });
  }, [userData]);

  // useEffect(() => {
  //   const userKeyId = JSON.parse(localStorage.getItem("currentUserId"))
  //   reference.child(userKeyId).update({
  //     profilePic: userData.profilePic,
  //     age: userData.age,
  //     phoneNumber: userData.phoneNumber,
  //     dateOfBirth: userData.dateOfBirth
  //   })
  // }, [userData])

  // useEffect(() => {
  //   if (!userData?.profilePic) return; // No profilePic to update

  //   const unsubscribe = onValue(reference, snapshot => {
  //     const data = snapshot.val();
  //     if (!data) return;

  //     // Find the user entry by matching email and password
  //     const entries = Object.entries(data);
  //     const found = entries.find(
  //       ([val]) =>
  //         val.email === userValidity.email &&
  //         val.password === userValidity.password
  //     );

  //     if (found) {
  //       const [userKey, userObj] = found;

  //       // Update only the profilePic field
  //       if (userObj.profilePic !== userData.profilePic) {
  //         update(
  //           ref(database, `UserData/${userKey}`),
  //           { profilePic: userData.profilePic }
  //         );
  //       }
  //     }
  //   });

  //   return () => unsubscribe(); // Cleanup the listener on unmount
  // }, [userData.profilePic]);

  return null; // This component does not render anything
};

export default UpdateUserInfo;