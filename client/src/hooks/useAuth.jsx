import { useState } from "react";

const useAuth = () => {
  const [authState, setAuthState] = useState({
    userLogged: false,
    userValidity: { email: '', password: '' },
    notFound: false,
    loadingState: false
  });

  return { authState, setAuthState };
};

export default useAuth;
